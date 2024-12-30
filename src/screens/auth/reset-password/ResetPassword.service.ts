import {resetPasswordFormData} from "@/screens/auth/reset-password/useResetPassword.ts";
import {confirmResetPassword} from "aws-amplify/auth";

export default class ResetPasswordService {
    async resetPassword(data: resetPasswordFormData, email: string) {
        return await confirmResetPassword({
            username: email,
            confirmationCode: data.resetCode,
            newPassword: data.newPassword,
        }).catch((err) => {
            throw err;
        });
    }
}
