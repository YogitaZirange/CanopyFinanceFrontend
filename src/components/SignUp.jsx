import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useState } from "react";
// import { saveStudent } from "../services/StudentService";
import { NavigationBar } from "./NavigationBar";
import { signup } from "../services/SignUp";

export function SignUp() {
   // const [formData,setFormData]=useState({roll:"",name:"",marks:"",gender:""});
    const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:"",role:""});
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
        //    const result= await saveStudent(formData);
        const result= await signup(formData);
          // setFormData({roll:"",name:"",marks:"",gender:""});
           setFormData({firstName:"",lastName:"",email:"",password:"",role:""});
           setIsSubmitted(true);
           setTimeout(()=>{
            setIsSubmitted(false);
           },1500);
           console.log(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <>
        <NavigationBar />
        <Container>
          <Header text="Register User here"></Header>

          {/* <Form onSubmit={handleSubmit}>
            <Row > */}
    <Row className="justify-content-center">

      <Col lg={4}>

        <div className="card shadow border-secondary">
          <div className="card-body text-center">
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={isSubmitted ? formData.roll : null}
                    placeholder="Enter First Name"
                    name="firstName"
                    onKeyUp={handleChange}
                    className="w-100"
                    // style={{ width: '100%' }}
                   
                
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last Name"
                    name="lastName"
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onKeyUp={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          
            <Row>
      <Col lg={4}>
        <Form.Group className=" mb-3" >
          <Form.Label htmlFor="role">Role:</Form.Label>
          <br />
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="SUPPLIER">Supplier</option>
            <option value="INVESTOR">Investor</option>
            <option value="BUYER">Buyer</option>
            {/* <option value="USER">User</option>
            <option value="CUSTOMER">Customer</option> */}
          </select>
        </Form.Group>
      </Col>
    </Row>
            <Row>
              <Col lg={4} >
                <Button className="btn btn-lg" variant="primary" type="submit">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="mt-3">
            <Col lg={4}>
              {isSubmitted ? (
                <Alert variant="success">User Registered</Alert>
              ) : null}
            </Col>
          </Row>
          </div>
        </div>
      </Col>
    </Row>
        </Container>
      </>
    );
}