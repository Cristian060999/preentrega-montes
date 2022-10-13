import Card from 'react-bootstrap/Card';

const Container = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Hello World!</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    );
}

export default Container;