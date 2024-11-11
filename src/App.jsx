import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Article from "./components/Article.jsx";
import Article2 from "./components/Article2.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Nav.jsx";

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <Article />
      <hr />
      <br />
      <Article2 />
      <hr />
      <br />
      <br />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
