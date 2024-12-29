import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import SignupOTPInputService from "@/screens/auth/signup-otp-input/SignupOTPInput.service.ts";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ScreenConstants from "@/screens/ScreenConstants.ts";

const useSignupOTPInput = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {email} = location.state || {};
    const signupOTPInputService = new SignupOTPInputService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log(email);
    })

    const inputSchema = z.object({
        pin: z.string().min(6, {
            message: "Your one-time password must be 6 characters.",
        }),
    })

    const form = useForm<z.infer<typeof inputSchema>>({
        resolver: zodResolver(inputSchema),
        defaultValues: {
            pin: "",
        },
    })

    const onSubmit = (data: z.infer<typeof inputSchema>) => {
        setIsLoading(true);

        signupOTPInputService.confirmWithCode(email, data.pin).then((result) => {
            if (result) {
                navigate(ScreenConstants.DASHBOARD);
            }
        }).catch((err) => {
            console.error(err);
            setError(err.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return {form, onSubmit, isLoading, error};
}

export default useSignupOTPInput;
