import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <main className="container mt-3">
          <Route exact path= "/" component={About} />
          <Route exact path= "/about" component={About} />
          <Route exact path= "/gallery" component={Gallery} />
          <Route exact path= "/contact" component={Contact} />
        </main>

        <Footer
          date="2020"
          name="Luke Robinett"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
