import { Link } from 'gatsby'
import React from "react";

export default function Navbar() {
    return  (
        <nav>
        <h1> World</h1>
        <div className="links">
            <Link to="/Bill-Lee-p1/blog/src/pages/index.js">Home</Link>
             <Link to="/Bill-Lee-p1/blog/src/pages/about.js">About</Link>
              <Link to="/Bill-Lee-p1/blog/src/pages/page-2.js">Portfolio</Link>
        </div>
        </nav>
    )
}