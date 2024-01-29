// src/components/HomePage.js
import './Home.css'

import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Breaking News',
    image: 'https://media.istockphoto.com/id/1080087216/vector/headline-or-breaking-news-man-tv-reporter-presenter-sitting-in-a-studio.jpg?s=612x612&w=0&k=20&c=A22CKx1N635ZQzR_EKLpBXzHjK8BMy_Ojpi5aElAu-k=',
    description: 'This is a brief description of the breaking news.',
  },
  {
    id: 2,
    title: 'Latest Update',
    image: 'https://staticimg.amarujala.com/assets/images/2022/03/17/big-news_1647470651.jpeg?w=674&dpr=1.0',
    description: 'This is a brief description of the latest update.',
  },
  // {
  //   id: 3,
  //   title: 'Top Story',
  //   image: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2020/08/breakingnews-live-blog-1568185450-1595123397-1597973758.jpg',
  //   description: 'This is a brief description of the top story.',
  // },
];

const HomePage = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', padding: '70px' }}>
        <h1 className="headu" style={{ margin: '20px 0 0 0' }}>NexusNews</h1>
        {/* Adjusted margin-top to 20px */}
      </header>
      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
        {articles.map(article => (
          <article key={article.id} style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '10px', overflow: 'hidden', width: '600px' }}>
            <img src={article.image} alt="News Image" style={{ maxWidth: '100%', height: 'auto', borderBottom: '1px solid #ddd' }} />
            <h2 style={{ fontSize: '1.5em', margin: '10px' }}>{/* Increased font size */}{article.title}</h2>
            <p style={{ fontSize: '1.2em', margin: '10px' }}>{/* Increased font size */}{article.description}</p>
          </article>
        ))}
      </section>

      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        &copy; 2023 Your News Website. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
