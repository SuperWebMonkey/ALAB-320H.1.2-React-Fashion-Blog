import React from "react";

function Nav() {
  return (
    <nav class="navbar" aria-label="Main Navigation" role="navigation">
      <div class="navbar-container">
        <ul class="tab-list">
          <li>
            <a href="#" class="tab-link active">
              Women's
            </a>
          </li>
          <li>
            <a href="#" class="tab-link">
              Men's
            </a>
          </li>
          <li>
            <a href="#" class="tab-link">
              On the Street
            </a>
          </li>
          <li>
            <a href="#" class="tab-link">
              The Catwalk
            </a>
          </li>
          <li>
            <a href="#" class="tab-link">
              AdWatch
            </a>
          </li>
          <li>
            <a href="#" class="tab-link">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
