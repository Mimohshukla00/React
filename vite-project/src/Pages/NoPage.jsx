// import React from 'react'

import { Outlet } from "react-router-dom";

function NoPage() {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default NoPage;
