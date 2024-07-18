// src/components/Blog.js
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/getBlogPosts.php')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-4">
        {posts.map(post => (
          <div key={post.id} className="border-b py-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{new Date(post.date_published).toLocaleDateString()}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
