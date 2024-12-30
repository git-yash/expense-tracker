import {confirmSignUp} from 'aws-amplify/auth';

export default class OTPInputService {
    async confirmWithCode(email: string, code: string): Promise<boolean> {
        return await confirmSignUp({
            username: email,
            confirmationCode: code,
        }).then(result => {
            return result.isSignUpComplete
        }).catch(err => {
            throw err;
        })
    }
}
