"use client";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "@/screens/auth/login/Login.tsx";
import {Signup} from "@/screens/auth/signup/Signup.tsx";
import {OTPInput} from "@/screens/auth/otp-input/OTPInput.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {Dashboard} from "@/screens/dashboard/dashboard.tsx";
import {Amplify} from "aws-amplify";
import {awsConfig} from "@/aws-config.ts";
import {ForgotPassword} from "@/screens/auth/forgot-password/ForgotPassword.tsx";
import {ResetPassword} from "@/screens/auth/reset-password/ResetPassword.tsx";
import {useEffect} from "react";

Amplify.configure(awsConfig);

export default function App() {
    useEffect(() => {
        console.log(awsConfig);
    })
    return (
        <Router>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path={ScreenConstants.LOGIN} element={<Login/>}/>
                    <Route path={ScreenConstants.SIGNUP} element={<Signup/>}/>
                    <Route path={ScreenConstants.VERIFICATION_CODE} element={<OTPInput/>}/>
                    <Route path={ScreenConstants.DASHBOARD} element={<Dashboard/>}/>
                    <Route path={ScreenConstants.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                    <Route path={ScreenConstants.RESET_PASSWORD} element={<ResetPassword/>}/>
                </Routes>
            </div>
        </Router>
    );
}
