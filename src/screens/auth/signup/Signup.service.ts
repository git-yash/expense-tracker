import {signUp} from "aws-amplify/auth"
import {signupFormData} from "@/screens/auth/signup/useSignup.ts";

export default class SignupService {
    async getSignupNextStep(data: signupFormData) {
        return await signUp({
            username: data.email,
            password: data.password,
            options: {
                userAttributes: {
                    email: data.email,
                    name: data.name,
                }
            },
        }).then(result => {
            return result.nextStep
        }).catch(error => {
            throw error;
        })
    }
}
