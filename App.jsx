import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import CoffeeDetails from "./components/CoffeeDetails";
import Login from "./pages/Login";
import { CoffeeProvider } from "./context/CoffeeContext";
import "./app.css";

export default function App() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:id" element={<CoffeeDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CoffeeProvider>
    </BrowserRouter>
  );
}
