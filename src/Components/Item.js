import React from "react";
import { Card, Button } from "react-bootstrap";
import './Item.css'
import PropTypes from "prop-types";

const Item = ({name, price, imgSrc, handleVision}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant="primary" onClick={() => handleVision(name, price)}>
          Show Item
        </Button>
      </Card.Body>
    </Card>
  );
};

Item.defaultProps = {
  name: "ACER NITRO 5",
  price: "3299 DT",
  imgSrc: "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/n/h/nh.qelef.00f.jpg",
  handleVision: (name, price) => alert(`
  Product: ${name}
  Price: ${price}`),
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imgSrc: PropTypes.string,
  handleVision: PropTypes.func
};

export default Item;
