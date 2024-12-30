import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ForgotPasswordService from "@/screens/auth/forgot-password/ForgotPassword.service.ts";
import ScreenConstants from "@/screens/ScreenConstants.ts";

const useForgotPassword = () => {
    const navigate = useNavigate();
    const forgotPasswordService = new ForgotPasswordService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const inputSchema = z.object({
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
    });

    const form = useForm<z.infer<typeof inputSchema>>({
        resolver: zodResolver(inputSchema),
        defaultValues: {
            email: "",
        },
    });

    const navigateToNextScreen = (resetPasswordStep: string, email: string) => {
        if (resetPasswordStep === "DONE") {
            navigate(ScreenConstants.LOGIN)
        } else if (resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE") {
            navigate(ScreenConstants.RESET_PASSWORD, {state: {email: email}})
        }
    }

    const onSubmit = (data: z.infer<typeof inputSchema>) => {
        setIsLoading(true);

        forgotPasswordService.sendResetCode(data.email).then((result) => {
            navigateToNextScreen(result.resetPasswordStep, data.email);
        }).catch(error => {
            console.error(error);
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        })
    };

    return {form, onSubmit, isLoading, error};
};

export default useForgotPassword;
