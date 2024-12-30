"use client"

import {Button} from "@/components/ui/button"
import {Form,} from "@/components/ui/form"
import useOTPInput from "@/screens/auth/signup-otp-input/useOTPInput.ts";
import {InputOTPFormField} from "@/components/customComponents/InputOTPFormField.tsx";

export function OTPInput() {
    const {form, onSubmit, isLoading, error} = useOTPInput();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <InputOTPFormField form={form} name={"pin"} error={error} label={"Verification Code"}
                                   description={"Please enter the verification code sent to your email. Check your spam!"}/>
                <Button type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</Button>
            </form>
        </Form>
    )
}
