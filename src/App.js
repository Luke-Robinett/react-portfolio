import React from 'react';
import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <h2>Main Stuff Here</h2>
      </main>

      <Footer
        date="2020"
        name="Luke Robinett"
      />
    </div>
  );
}

export default App;
