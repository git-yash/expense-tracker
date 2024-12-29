"use client";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "@/screens/auth/login/Login.tsx";
import {Signup} from "@/screens/auth/signup/Signup.tsx";
import {SignupOTPInput} from "@/screens/auth/signup-otp-input/SignupOTPInput.tsx";
import ScreenConstants from "@/screens/ScreenConstants.ts";
import {Dashboard} from "@/screens/dashboard/dashboard.tsx";
import {Amplify} from "aws-amplify";
import {awsConfig} from "@/aws-config.ts";

Amplify.configure(awsConfig);

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path={ScreenConstants.LOGIN} element={<Login/>}/>
                    <Route path={ScreenConstants.SIGNUP} element={<Signup/>}/>
                    <Route path={ScreenConstants.VERIFICATION_CODE} element={<SignupOTPInput/>}/>
                    <Route path={ScreenConstants.DASHBOARD} element={<Dashboard/>}/>
                </Routes>
            </div>
        </Router>
    );
}
