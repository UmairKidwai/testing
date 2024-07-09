import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col items-center justify-center min-h-screen bg-dark-blue p-4">
                <nav className="mb-8">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/signin" className="text-light-blue hover:underline">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="text-light-blue hover:underline">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
