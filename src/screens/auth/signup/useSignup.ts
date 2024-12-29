import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import SignupService from "@/screens/auth/signup/Signup.service.ts";
import ScreenConstants from "@/screens/ScreenConstants.ts";

export type signupFormData = {
    name: string;
    email: string;
    password: string;
}

const useSignup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const signupSchema = z.object({
        name: z.string().min(2, "Name must be at least 2 characters."),
        email: z.string().email("Invalid email address."),
        password: z.string().min(6, "Password must be at least 6 characters."),
    });

    const form = useForm<signupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const navigateToNextScreen = (nextStep: string, email: string): void => {
        if (nextStep === "DONE") {
            navigate(ScreenConstants.DASHBOARD);
        } else if (nextStep === "CONFIRM_SIGN_UP") {
            navigate(ScreenConstants.VERIFICATION_CODE, {state: {email: email}});
        }
    };

    const onSubmit = (values: signupFormData): void => {
        const signupService = new SignupService();
        setIsLoading(true);

        signupService.getSignupNextStep(values).then((result) => {
            navigateToNextScreen(result.signUpStep, values.email);
        }).catch(error => {
            console.error(error);
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return {form, onSubmit, isLoading, error};
}

export default useSignup;
