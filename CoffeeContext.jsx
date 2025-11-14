import React, { createContext } from "react";
import Caramel from "../assets/Caramel-Frappuccino.png";
import Latte from "../assets/caffelatte.png";
import Croissant from "../assets/Butter-Croissant.png";

export const coffeeData = [
  {
    id: "caramel-frappuccino",
    name: "Caramel Frappuccino",
    img: Caramel,
    desc: "A delicious blend of coffee, milk, and ice, topped with whipped cream and caramel drizzle.",
    details: "Caramel Frappuccino is an icy treat with rich coffee blended with milk and caramel syrup. Topped with whipped cream and caramel drizzle, it's perfect for a sweet and refreshing break."
  },
  {
    id: "caffelatte",
    name: "Caffè Latte",
    img: Latte,
    desc: "Rich espresso in steamed milk topped with foam.",
    details: "Caffè Latte is a classic, featuring bold espresso and creamy steamed milk topped with a thin layer of milk foam."
  },
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    img: Croissant,
    desc: "A flaky, buttery pastry that complements any coffee.",
    details: "Our Butter Croissant is baked fresh daily, offering a layered, flaky texture and rich buttery flavor perfect for any time."
  }
];

export const CoffeeContext = createContext();

export function CoffeeProvider({ children }) {
  return (
    <CoffeeContext.Provider value={{ coffeeData }}>
      {children}
    </CoffeeContext.Provider>
  );
}
