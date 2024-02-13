import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../utils/TokenUtil";
import { useNavigate } from "react-router-dom";
import { getUser, isAuthenticated } from './../utils/TokenUtil';

export function NavigationBar() {

    const userRole = getUser();

    const navigate=useNavigate();

    const handleLogoutClick=()=>{
        logout();
        navigate("/");
    }
    return (
    
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        {/* <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer> */}


                        {userRole === "ADMIN" && (
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin Dashboard</Nav.Link>
                        </LinkContainer>
                        )}

                        {userRole === "SUPPLIER" && (
                        <LinkContainer to="/supplier">
                            <Nav.Link>Supplier Dashboard</Nav.Link>
                        </LinkContainer>
                        )}
                         
                         {userRole === "INVESTOR" && (
                        <LinkContainer to="/investor">
                            <Nav.Link>Investor Dashboard</Nav.Link>
                        </LinkContainer>
                         )}
                         
                         {userRole === "BUYER" && (
                        <LinkContainer to="/buyer">
                            <Nav.Link>Buyer Dashboard</Nav.Link>
                        </LinkContainer>
                         )}


                       {userRole === "SUPPLIER" && (
                        <LinkContainer to="/addproduct">
                            <Nav.Link>Add Products</Nav.Link>
                        </LinkContainer>
                       )}
                        {userRole === "SUPPLIER" && (
                        <LinkContainer to="/editproduct">
                            <Nav.Link>Edit Products</Nav.Link>
                        </LinkContainer>
                        )}

                       <LinkContainer to="/viewproduct">
                            <Nav.Link>All Products</Nav.Link>
                        </LinkContainer>
                       

                        <LinkContainer to="/addfeedback">
                        <Nav.Link>FeedBack</Nav.Link>
                        </LinkContainer>

                        {/* <LinkContainer to="/editfeedback">
                        <Nav.Link>FeedBack</Nav.Link>
                        </LinkContainer> */}

                        {userRole === "ADMIN" && (
                        <LinkContainer to="/viewfeedback">
                        <Nav.Link>FeedBacks</Nav.Link>
                        </LinkContainer>
                        )}
                  

                        <LinkContainer to="/aboutus">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        
   
                 {!isAuthenticated() && (       
                    <>
                        <LinkContainer to="/signup">
                            <Nav.Link>Register User</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/signin">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                      )}

   
                       {/* <LinkContainer to="/buyer">
                            <Nav.Link>Buyer Dashboard</Nav.Link>
                        </LinkContainer>
                          */}

                        {/* <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer> */}

                    </Nav>
                    <Button variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}