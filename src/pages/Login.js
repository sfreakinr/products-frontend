import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const backendURL = "https://products-backend-p3io.onrender.com"; 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://products-backend-p3io.onrender.com/api/auth/login`, { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/products");
        } catch (err) {
            setError("Invalid Credentials");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin} className="w-50 mx-auto">
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Login</Button>
            </Form>
        </Container>
    );
}

export default Login;
