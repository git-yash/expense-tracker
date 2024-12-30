import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import OTPInputService from "@/screens/auth/signup-otp-input/OTPInput.service.ts";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ScreenConstants from "@/screens/ScreenConstants.ts";

const useOTPInput = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {email} = location.state || {};
    const signupOTPInputService = new OTPInputService();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);

    const inputSchema = z.object({
        pin: z.string().min(6, {
            message: "Your code must be at least 6 digits.",
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

export default useOTPInput;
