import React from "react";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <nav>
        <ul>
          <li>
            <Link to="child1">Child 1</Link>
          </li>
          <li>
            <Link to="child2">Child 2</Link>
          </li>
        </ul>
      </nav>
      {/* Outlet is a placeholder for child routes */}
      <Outlet />
    </div>
  );
}

export default Parent;
