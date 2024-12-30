import {resetPassword} from "aws-amplify/auth";

export default class ForgotPasswordService {
    async sendResetCode(email: string) {
        return await resetPassword({
            username: email,
        }).then(result => {
            return result.nextStep
        }).catch(error => {
            throw error;
        })
    }
}
