import { useState } from "react";

function OrderForm() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Place Order</button>

    </form>
  );
}

export default OrderForm;