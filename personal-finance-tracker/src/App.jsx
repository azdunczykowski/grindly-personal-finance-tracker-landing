import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Snippets from "./components/Snippets";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Snippets />
      </div>
    </>
  );
};

export default App;
