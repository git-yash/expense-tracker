"use client";

import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {CustomFormField} from "@/components/customComponents/form-field";
import {InputOTPFormField} from "@/components/customComponents/InputOTPFormField";
import useResetPassword from "@/screens/auth/reset-password/useResetPassword.ts";
import {ErrorMessage} from "@/components/customComponents/error-message.tsx";

export function ResetPassword() {
    const {form, onSubmit, isLoading, error, email} = useResetPassword();

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-md w-full px-4 py-6 mx-auto sm:py-8 sm:px-6 lg:max-w-lg lg:py-10"
            >
                <h2 className="text-xl font-bold text-center sm:text-2xl md:text-3xl">
                    Reset Password
                </h2>
                <ErrorMessage error={error}/>
                <InputOTPFormField
                    form={form}
                    error={error}
                    name={"resetCode"}
                    label={"Reset Code"}
                    description={`Enter the 6-digit reset code sent to ${email}.`}
                />
                <CustomFormField
                    form={form}
                    name={"newPassword"}
                    label={"New Password"}
                    placeholder={"Enter your new password"}
                    type="password"
                />
                <Button
                    type="submit"
                    className="w-full py-2 sm:py-3 text-sm sm:text-base md:py-4"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
            </form>
        </Form>
    );
}
