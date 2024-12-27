"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
    Form,
} from "@/components/ui/form.tsx";
import useSignup from "@/screens/signup/useSignup.ts";
import {CustomFormField} from "@/components/customComponents/form-field.tsx";

export function Signup() {
    const {form, onSubmit} = useSignup();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <CustomFormField form={form} name={'name'} label={'Name'} placeholder={'Your full name'} />
                <CustomFormField form={form} name={'email'} label={'Email'} placeholder={'example@email.com'} />
                <CustomFormField form={form} name={'password'} label={'Password'} placeholder={'Create a password'} type="password" />
                <Button type="submit" className="w-full" onSubmit={onSubmit}>
                    Sign Up
                </Button>
                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500 underline">
                        Log In
                    </Link>
                </p>
            </form>
        </Form>
    );
}
