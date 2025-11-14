import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CoffeeContext } from "../context/CoffeeContext";

export default function CoffeeDetails() {
  const { coffeeData } = useContext(CoffeeContext);
  const { id } = useParams();
  const coffee = coffeeData.find(item => item.id === id);
  const navigate = useNavigate();

  if (!coffee) return <p>Coffee not found.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={coffee.img} alt={coffee.name} style={{ width: "200px", borderRadius: "15px" }} />
      <h2>{coffee.name}</h2>
      <p>{coffee.details}</p>
      <button onClick={() => navigate("/service")} style={{ marginTop: "10px" }}>Back to Menu</button>
    </div>
  );
}
