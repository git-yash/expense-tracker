"use client";

import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Form} from "@/components/ui/form.tsx";
import useLogin from "@/screens/auth/login/useLogin.ts";
import {CustomFormField} from "@/components/customComponents/FormField.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {ErrorMessage} from "@/components/customComponents/ErrorMessage.tsx";

export function Login() {
    const {form, onSubmit, isLoading, error} = useLogin();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center">Login</h2>

                <ErrorMessage error={error}/>
                <CustomFormField
                    form={form}
                    name={'email'}
                    label={'Email'}
                    placeholder={'example@email.com'}
                />
                <CustomFormField
                    form={form}
                    name={'password'}
                    label={'Password'}
                    placeholder={'Enter password'}
                    type="password"
                />
                <div className="flex justify-end">
                    <Link to={ScreenConstants.FORGOT_PASSWORD} className="text-sm text-blue-500 underline">
                        Forgot Password?
                    </Link>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Log in"}
                </Button>
                <p className="text-sm text-center">
                    Don’t have an account?{" "}
                    <Link to={ScreenConstants.SIGNUP} className="text-blue-500 underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </Form>
    );
}
