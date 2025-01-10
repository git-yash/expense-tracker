import {GetSecretValueCommand, SecretsManagerClient} from "@aws-sdk/client-secrets-manager";
import pkg from "pg";

const {Pool} = pkg;

const secret_name = "prod/expense-tracker/postgresql";
const secretsClient = new SecretsManagerClient({region: "us-east-1"});

let dbCredentials = null;
let pool = null;

async function fetchSecrets() {
    if (!dbCredentials) {
        try {
            const response = await secretsClient.send(
                new GetSecretValueCommand({SecretId: secret_name})
            );
            if (!response.SecretString) {
                throw new Error("SecretString is empty.");
            }
            dbCredentials = JSON.parse(response.SecretString);
        } catch (error) {
            console.error("Error fetching secrets:", error);
            throw new Error("Unable to fetch secrets.");
        }
    }
}

async function getPool() {
    if (!pool) {
        await fetchSecrets();
        console.log("Database credentials fetched:", dbCredentials);
        pool = new Pool({
            host: dbCredentials.host,
            port: dbCredentials.port,
            user: dbCredentials.username,
            password: dbCredentials.password,
            database: dbCredentials.engine,
            ssl: {rejectUnauthorized: false}, // TODO: try to remove this so it works without rejecting unauthorized requests
        });
    }
    return pool;
}

export const handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    try {
        const pool = await getPool();

        const {username} = event;
        const {name, email, sub} = event.request.userAttributes;

        // Use `username` or fallback to `sub` if `username` is null/undefined
        const userId = username || sub;

        if (!userId) {
            throw new Error("User ID is missing. Cannot insert into the database.");
        }

        const query = `
            INSERT INTO users (id, name, email)
            VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING;
        `;
        const values = [userId, name, email];

        const client = await pool.connect();
        try {
            await client.query(query, values);
        } finally {
            client.release();
        }

        console.log("User added successfully.");
        return event; // Required for Cognito triggers
    } catch (error) {
        console.error("Error handling PostConfirmation event:", error);
        throw error; // Rethrow to signal failure to Cognito
    }
};
