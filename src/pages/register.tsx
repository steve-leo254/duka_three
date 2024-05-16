import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const apiUrl = "http://127.0.0.1:5000/register";
            const response = await axios.post(apiUrl, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("Registration successful.", response.data);
            setIsRegistered(true);
            setError("");
            // Additional logic upon successful registration
        } catch (error) {
            console.error("Registration failed.", error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {isRegistered && <p>Registration successful!</p>}
            <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
