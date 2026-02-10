import React, { useEffect, useState } from 'react'

function Fakestoreapi() {
  const [products, setproducts] = useState({})

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

  return (
    <div style={Styles.card}>
      <img src={products.image} alt={products.title} style={Styles.img} />
      <h4>{products.title}</h4>
      <p><b>Price:</b> ${products.price}</p>
      <p><b>Description:</b> {products.description}</p>
      <p><b>Category:</b> {products.category}</p>
    </div>
  )
}

const Styles = {
  card: {
    width: "300px",
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    margin: "5px"
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "contain"
  }
}

export default Fakestoreapi
