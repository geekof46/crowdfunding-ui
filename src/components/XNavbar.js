import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {  Link } from "react-router-dom";

function XNavbar() {

    return <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href='/'>CrowdFunding.com</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link> 
                <Link className="Nav Navbar" to="/innovator">Innovator</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className="Nav Navbar" to="/donor">Donor</Link>
            </Nav.Link>
            </Nav>
        </Container>
    </Navbar>;
}

export default XNavbar;