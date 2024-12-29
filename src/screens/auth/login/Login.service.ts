import {loginFormData} from "@/screens/auth/login/useLogin.ts";
import {signIn} from "aws-amplify/auth";

export default class LoginService {
    async login(data: loginFormData) {
        return await signIn({
            username: data.email,
            password: data.password,
        }).then((result) => {
            return result.nextStep
        }).catch((err) => {
            throw err;
        })
    }
}
