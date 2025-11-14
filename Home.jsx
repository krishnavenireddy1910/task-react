import React from "react";
import Banner from "../assets/home-banner.png" 

export default function Home() {
  return (
    <div 
      className="home-banner"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="banner-content">
        <h1>Welcome to Starbucks</h1>
        <p>Handcrafted beverages, delicious bakery, and your daily favorites.</p>
      </div>
    </div>
  );
}
