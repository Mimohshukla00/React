import React, { useState } from "react";
import AppContext from "./AppContext";
function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  return <div>AppContextProvider</div>;
}

export default AppContextProvider;
