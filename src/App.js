import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import productImage1 from "./images/product1.jpg";
import productImage2 from "./images/product2.jpg";
import productImage3 from "./images/product3.jpg";
import "./App.css";
import data from "./data.js";
import Product from "./product.js";
import { useState } from "react";

function App() {
  let [productList] = useState(data);
  const productImages = [productImage1, productImage2, productImage3];

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            Shop
          </Navbar.Brand>
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="nav-link">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-link">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container className="product-container">
        <Row className="product-row">
          {productList.map((product, index) => (
            <Product
              key={product.id}
              title={product.title}
              image={productImages[index]}
              content={product.content}
              price={product.price}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
