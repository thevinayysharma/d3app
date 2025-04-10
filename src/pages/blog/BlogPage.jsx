import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogCard from '../../components/BlogCard';
import './blog.css';
import face_blog from '../../assets/face_blog.png';
import body_blog from '../../assets/body_blog.png';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Facial Analytics',
    image: face_blog,
    content: `Facial analytics is revolutionizing how machines interpret human emotions and behavior through facial expressions. 
With AI and computer vision, it's being used in sectors like marketing, education, and healthcare for real-time feedback. 
Retailers can assess customer satisfaction, while educators can monitor student attentiveness remotely. 
As accuracy improves, so does the ethical responsibility around privacy and consent. 
Facial analytics paves the way for deeply personalized, intuitive digital interactions.`,
  },
  {
    id: 2,
    title: 'The Power of Body Analytics',
    image: body_blog,
    content: `Body analytics decodes physical movement, posture, and gestures to deliver insights into human performance. 
Used in sports, workplace safety, and rehabilitation, it enhances physical efficiency and injury prevention. 
Computer vision and wearables together provide precise movement tracking without invasive hardware. 
It's transforming remote physiotherapy, training, and even ergonomic assessments in real time. 
By understanding how we move, body analytics is shaping healthier, smarter environments.`,
  },
];


const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const location = useLocation();

  const selectedPost = id ? blogPosts.find((post) => post.id === parseInt(id)) : null;

  const handleCardClick = (post) => {
    navigate(`/blog/${post.id}`);
  };

  const handleBackClick = () => {
    navigate('/blog');
  };

  return (
    <div className="blog-container">
      {selectedPost ? (
        <div className="blog-expanded">
          <h2>{selectedPost.title}</h2>
          <img src={selectedPost.image} alt={selectedPost.title} className="expanded-img" />
          <p>{selectedPost.content}</p>
          <button className="back-btn" onClick={handleBackClick}>Back</button>
        </div>
      ) : (
        <>
          <div className="blog-header">
            <h1 className="blog-title">Our Articles!</h1>
          </div>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} onClick={() => handleCardClick(post)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPage;
