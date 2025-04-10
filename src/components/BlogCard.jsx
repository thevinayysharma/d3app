import React from 'react';

const BlogCard = ({ post, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <img src={post.image} alt={post.title} className="card-image" />
      <div className="card-title">{post.title}</div>
    </div>
  );
};

export default BlogCard;
