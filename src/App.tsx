import React from "react";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <div className={`w-screen h-screen bg-zinc-100 bg-[url("https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]`}>
        <Hero />
      </div>
    </>
  );
};

export default App;
