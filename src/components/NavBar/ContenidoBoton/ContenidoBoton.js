import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const ContenidoBoton = () => {
    return (
        <div>
            <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                    <Button variant="outline-success">Carrito</Button>
                </Form>
            </Navbar.Collapse>
        </div>
    );
}

export default ContenidoBoton;