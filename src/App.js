import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
//import Card from "./Card.js";
import Footer from "./Footer.js"
import Card2 from "./Card2.js"
function App() {
  return (
    <div className="App">
      <Header />
       {/* <Card />  */}
     <Card2 />
      <Footer />
    </div>
  );
}

export default App;
