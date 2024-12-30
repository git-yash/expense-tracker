"use client";

import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {CustomFormField} from "@/components/customComponents/form-field";
import {InputOTPFormField} from "@/components/customComponents/InputOTPFormField";
import useResetPassword from "@/screens/auth/reset-password/useResetPassword.ts";

export function ResetPassword() {
    const {form, onSubmit, isLoading, error, email} = useResetPassword();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center">Reset Password</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                         role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
            </form>
        </Form>
    );
}
