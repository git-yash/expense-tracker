export const awsConfig = {
    aws_project_region: import.meta.env.VITE_REGION,
    aws_cognito_identity_pool_id: import.meta.env.VITE_IDENTITY_POOL_ID,
    aws_cognito_region: import.meta.env.VITE_REGION,
    aws_user_pools_id: import.meta.env.VITE_USER_POOL_ID,
    aws_user_pools_web_client_id: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    aws_appsync_graphqlEndpoint: import.meta.env.VITE_APP_SYNC_URL,
    aws_appsync_region: import.meta.env.VITE_REGION,
    aws_appsync_authenticationType: import.meta.env.VITE_AUTHENTICATION_TYPE,
};
