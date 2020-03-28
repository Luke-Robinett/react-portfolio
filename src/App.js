import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="container">
        <h2>Main Stuff Here</h2>
      </main>

      <Footer
        date="2020"
        name="Luke Robinett"
      />
    </BrowserRouter>
  );
}

export default App;
