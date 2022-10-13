import ContenidoBoton from "./ContenidoBoton/ContenidoBoton";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Licorera CM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Productos</Nav.Link>
                            <Nav.Link href="#action3">Conocenos</Nav.Link>

                        </Nav>

                        <ContenidoBoton />

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavBar;