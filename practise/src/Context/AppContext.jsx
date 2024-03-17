import { createContext, useState } from "react";
// import { baseUrl } from "../baseUrl";
export const AppContext = createContext();
function AppContext({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(null);
  // data filling

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";


  async function fetchBlogPosts(page = 1) {
    setloading(true);
    let url = `${baseUrl}?_limit=6&_page=${page}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setpage(data.page);
      setposts(data.posts);
      settotalPages(data.totalPages);
    } catch (error) {
      console.log("Error:", error);
      setpage(1);
      setposts([]);
      settotalPages(null);
    }
    setloading(false);
  }
  function handlePageChange() {
    setpage(page);
    fetchBlogPosts(page);
  }

  const value = {
    posts,
    setposts,
    loading,
    setloading,
    page,
    setpage,
    totalPages,
    settotalPages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
