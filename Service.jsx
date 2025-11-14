import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../context/CoffeeContext";

export default function Service() {
  const { coffeeData } = useContext(CoffeeContext);

  return (
    <section className="menu-highlights">
      <h2>Explore Our Favourites</h2>
      <div className="menu-items">
        {coffeeData.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
            <h3>
              <Link to={`/service/${item.id}`}>{item.name}</Link>
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
