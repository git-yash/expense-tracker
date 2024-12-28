"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "@/screens/auth/login/Login.tsx";
import {Signup} from "@/screens/auth/signup/Signup.tsx";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
    );
}
