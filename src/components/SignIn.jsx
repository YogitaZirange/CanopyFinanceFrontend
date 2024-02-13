import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { login } from "../services/AdminService";
import { login } from "../services/SignIN";
//  import { login } from "../services/StudentService";

import { useNavigate } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Header } from "./Header";

export function SignIn() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const [loginError,setLoginError]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await login(formData);
          localStorage.setItem("jwt",result.jwt);
          localStorage.setItem("roles",result.roles);
          navigate("/");
          //navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <>
        <NavigationBar/>
        <Header text="Welcome to Our Webiste"> </Header>
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col lg={4}>
                    <div className="card shadow border-secondary">
                    <div className="card-body">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>
                        
                        <Button className="btn btn-lg" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {loginError?<Alert variant="danger" className="mt-3">Invalid email or password</Alert>:null}
                    </div></div>
                </Col>
            </Row>
        </Container>
        </>
    );
}