function Cart({ cart }) {

  return (
    <div>

      <h2>Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

    </div>
  );
}

export default Cart;