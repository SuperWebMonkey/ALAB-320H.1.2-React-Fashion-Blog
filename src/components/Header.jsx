import React from "react";
import styled from "styled-components";
import Navbar from "./Nav.jsx";

function Header() {
  return (
    <header>
      <h1 id="blog-title">Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Navbar />
    </header>
  );
}

export default Header;
