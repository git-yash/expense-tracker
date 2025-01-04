import * as process from "node:process";

export const awsConfig = {
    aws_project_region: process.env.REACT_APP_REGION,
    aws_cognito_identity_pool_id: process.env.REACT_APP_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.REACT_APP_REGION,
    aws_user_pools_id: process.env.REACT_APP_USER_POOL_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_APP_SYNC_URL,
    aws_appsync_region: process.env.REACT_APP_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_AUTHENTICATION_TYPE,
};
