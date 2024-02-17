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
    const [secretKey, setSecretKey] = useState("");


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (formData.role === "ADMIN" && secretKey !== "1122") {
          // Display an error message or handle unauthorized admin registration
          console.log("Invalid secret key for admin");
          return;
        }
    
        const result = await signup(formData);
        setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
        setSecretKey("");
        setIsSubmitted(true);
    
        setTimeout(() => {
          setIsSubmitted(false);
        }, 1500);
    
        console.log(result.message);
      } catch (error) {
        console.log(error);
      }
    };
    

    return (
      <>
        <NavigationBar />
        <Container>
          <Header text="Registration Form"></Header>

          {/* <Form onSubmit={handleSubmit}>
            <Row > */}
    <Row className="justify-content-center">

      <Col lg={3}>

        <div className="card shadow border-secondary">
          <div className="card-body ">
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label >First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={isSubmitted ? formData.roll : null}
                    placeholder="Enter First Name"
                    name="firstName"
                    onKeyUp={handleChange}
                  
                    // style={{ width: '100%' }}
                   
                
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
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
              <Col lg={12}>
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
              <Col lg={12}>
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
  <Col lg={12}>
    <Form.Group className=" mb-3">
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
      </select>
      {formData.role === "ADMIN" && (
        <Form.Control
          type="password"
          placeholder="Enter Secret Key"
          name="secretKey"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
      )}
    </Form.Group>
  </Col>
</Row>

            <Row>
              <Col lg={12} >
                <Button className="btn btn-lg" variant="primary" type="submit">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className="mt-3">
            <Col lg={12}>
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