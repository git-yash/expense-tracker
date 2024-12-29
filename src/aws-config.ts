import amplifyConfig from "../amplify_outputs.json";

export const awsConfig = {
    aws_project_region: amplifyConfig.auth.aws_region,
    aws_cognito_identity_pool_id: amplifyConfig.auth.identity_pool_id,
    aws_cognito_region: amplifyConfig.auth.aws_region,
    aws_user_pools_id: amplifyConfig.auth.user_pool_id,
    aws_user_pools_web_client_id: amplifyConfig.auth.user_pool_client_id,
    aws_appsync_graphqlEndpoint: amplifyConfig.data.url,
    aws_appsync_region: amplifyConfig.data.aws_region,
    aws_appsync_authenticationType: amplifyConfig.data.default_authorization_type,
};
