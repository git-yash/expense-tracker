"use client";

import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Form} from "@/components/ui/form.tsx";
import {CustomFormField} from "@/components/customComponents/FormField.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {ErrorMessage} from "@/components/customComponents/ErrorMessage.tsx";
import useForgotPassword from "@/screens/auth/forgot-password/useForgotPassword.ts";

export function ForgotPassword() {
    const {form, onSubmit, isLoading, error} = useForgotPassword();

    return (
        <div className={'flex 1 items-center'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                    <p className="text-sm text-center text-gray-600">
                        Enter your email to receive a password reset code.
                    </p>
                    <ErrorMessage error={error}/>
                    <CustomFormField
                        form={form}
                        name={'email'}
                        label={'Email'}
                        placeholder={'example@email.com'}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Code"}
                    </Button>
                    <p className="text-sm text-center">
                        Remembered your password?{" "}
                        <Link to={ScreenConstants.LOGIN} className="text-blue-500 underline">
                            Log In
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
}
