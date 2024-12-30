"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import ResetPasswordService from "@/screens/auth/reset-password/ResetPassword.service.ts";
import ScreenConstants from "@/screens/ScreenConstants.ts";

export type resetPasswordFormData = {
    resetCode: string;
    newPassword: string;
}

const useResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {email} = location.state || {};
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const resetPasswordService = new ResetPasswordService();

    const resetPasswordSchema = z.object({
        resetCode: z.string().min(6, {message: "Your code must be at least 6 digits."}),
        newPassword: z.string().min(6, {message: "Password must be at least 6 characters."}),
    });

    const form = useForm<resetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            resetCode: "",
            newPassword: "",
        },
    });

    const onSubmit = (data: resetPasswordFormData) => {
        setIsLoading(true);

        resetPasswordService.resetPassword(data, email).then(() => {
            navigate(ScreenConstants.LOGIN)
        }).catch((err) => {
            console.error(err);
            setError(err);
        }).finally(() => {
            setIsLoading(false);
        })
    };

    return {form, onSubmit, email, isLoading, error};
}

export default useResetPassword;
