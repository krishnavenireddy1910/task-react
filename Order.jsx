import { useState, useRef, useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

function Order() {
  const { selectedCoffee } = useContext(CoffeeContext);
  const nameRef = useRef();
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCoffee) {
      setOrder(`Order placed for ${selectedCoffee.name} by ${nameRef.current.value}`);
    } else {
      setOrder("Please select a coffee from the Menu first!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Order Your Coffee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Your Name" />
        <button type="submit">Place Order</button>
      </form>
      {order && <p>{order}</p>}
    </div>
  );
}
export default Order;
