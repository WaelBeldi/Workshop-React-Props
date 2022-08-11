import React from "react";
import Item from "./Item";
import "./Item.css";

const ListItem = ({ itemArray }) => {
  const handleVision = (name, price) =>
    alert(`
  Product: ${name}
  Price: ${price}`);
  return (
    <div className="listItem">
      {itemArray.map((item, key) => (
        <Item name={item.name} price={item.price} imgSrc={item.imgSrc} key={key} handleVision={handleVision} />
      ))}
      <Item name="LENOVO LEGION 5" price="3499 DT" imgSrc="https://www.wiki.tn/64544-thickbox_default/pc-portable-lenovo-legion-5-15ach6h-amd-ryzen-7-16go-512go-rtx3060-.jpg" handleVision={handleVision} />
      <Item />
    </div>
  );
};

export default ListItem;
