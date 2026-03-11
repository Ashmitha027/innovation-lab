import { useState } from "react";
import Cart from "../Cart";

function MenuList() {

  const menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 150 }
  ];

  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>

      {menu.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => addItem(item)}>Add</button>
        </div>
      ))}

      <Cart cart={cart} />

    </div>
  );
}

export default MenuList;