import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Add your sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark-blue p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-dark-blue">Sign Up</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password:</label>
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 font-semibold text-white bg-dark-blue rounded-md hover:bg-light-blue"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
