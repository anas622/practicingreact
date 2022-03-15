import { Nav, Navbar, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Navigation = () => {
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Practicing React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Add Entry</Nav.Link>
                <Nav.Link href="#link">Get in touch with us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigation;