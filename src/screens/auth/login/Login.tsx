"use client";

import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Form,} from "@/components/ui/form.tsx";
import useLogin from "@/screens/auth/login/useLogin.ts";
import {CustomFormField} from "@/components/customComponents/form-field.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";

export function Login() {
    const {form, onSubmit} = useLogin();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <CustomFormField form={form} name={'email'} label={'Email'} placeholder={'example@email.com'}/>
                <CustomFormField form={form} name={'password'} label={'Password'} placeholder={'Enter password'}
                                 type="password"/>
                <Button type="submit" className="w-full">
                    Login
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
