import React, { useState, useEffect, useRef } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const endOfPageRef = useRef();

  useEffect(() => {
    setLoading(true);
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (endOfPageRef.current) {
      observer.observe(endOfPageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fetchPosts = () => {
    fetch(`http://localhost:8000/posts?limit=10&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts((prevPosts) => [...prevPosts, ...res.data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      fetchPosts();
    }
  };

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <div ref={endOfPageRef} />
    </div>
  );
}

export default App;
