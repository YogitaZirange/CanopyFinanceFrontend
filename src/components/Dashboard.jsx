import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { NavigationBar } from "./NavigationBar";

export function Dashboard() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Header  text="Welcome to our Website "></Header>
                <h4 style={{textAlign: 'center'}}>We are developing a website for Role-based login,  CRUD operations, JWT authorization, and Payment Authentication </h4>
            </Container>
        </>

    );
}