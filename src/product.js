import Col from "react-bootstrap/Col";

function Product({ image, title, content, price }) {
  return (
    <Col className="product-col">
      <img
        src={image}
        alt="상품이미지"
        width="250px"
        height="250px"
        className="product-image"
      />
      <h4 className="product-title">{title}</h4>
      <p className="product-description">{content}</p>
      <p className="product-price">{price}원</p>
    </Col>
  );
}

export default Product;
