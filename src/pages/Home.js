import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container className="text-center mt-5">
            <h1>Welcome to Online ECommerce-Shop</h1>
            <p>Find the best products at unbeatable prices.</p>
            <Link to="/products">
                <Button variant="primary">View Products</Button>
            </Link>
        </Container>
    );
}

export default Home;
