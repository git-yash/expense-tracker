"use client";

import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Form,} from "@/components/ui/form.tsx";
import useSignup from "@/screens/auth/signup/useSignup.ts";
import {CustomFormField} from "@/components/customComponents/FormField.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {ErrorMessage} from "@/components/customComponents/ErrorMessage.tsx";

export function Signup() {
    const {form, onSubmit, isLoading, error} = useSignup();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <ErrorMessage error={error}/>
                <CustomFormField form={form} name={'name'} label={'Name'} placeholder={'Your full name'}/>
                <CustomFormField form={form} name={'email'} label={'Email'} placeholder={'example@email.com'}/>
                <CustomFormField form={form} name={'password'} label={'Password'} placeholder={'Create a password'}
                                 type="password"/>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Sign up"}
                </Button>
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <Link to={ScreenConstants.LOGIN} className="text-blue-500 underline">
                        Log In
                    </Link>
                </p>
            </form>
        </Form>
    );
}
