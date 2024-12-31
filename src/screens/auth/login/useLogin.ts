import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import LoginService from "@/screens/auth/login/Login.service.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ScreenConstants from "@/screens/ScreenConstants.ts";

export type loginFormData = {
    email: string;
    password: string;
}

const useLogin = () => {
    const loginService = new LoginService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const navigate = useNavigate();

    const loginSchema = z.object({
        email: z.string().email("Invalid email address."),
        password: z.string().min(6, "Password must be at least 6 characters."),
    });

    const form = useForm<loginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const navigateToNextScreen = (signInStep: string, email: string) => {
        if (signInStep === "CONFIRM_SIGN_UP") {
            navigate(ScreenConstants.VERIFICATION_CODE, {state: {email: email}})
        } else if (signInStep === "DONE") {
            navigate(ScreenConstants.DASHBOARD)
        }
    }

    const onSubmit = (values: loginFormData): void => {
        setIsLoading(true);
        loginService.login(values).then((result) => {
            navigateToNextScreen(result.signInStep, values.email)
        }).catch(error => {
            console.error(error)
            setError(error.message)
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return {onSubmit, form, isLoading, error};
}

export default useLogin;
