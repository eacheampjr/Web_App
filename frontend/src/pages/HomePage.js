import React from 'react';
// import { Link } from 'react-router-dom'; // If you need to link to other pages

function HomePage() {
  return (
    <main>
      <h2>Welcome to My Portfolio</h2>
      <article>
        <p>As an aspiring web developer, my career goals include mastering full-stack development, and 
          gaining the skills necessary to lead a development team. I am passionate about food,
          and the one thing that makes me forget about eating is when I am problem-solving!</p>
      </article>
      <p>The major technologies and concepts explored in this website include:</p>
      <ul>
        <li>HTML & CSS: The backbone of web development, used for structuring and styling web pages.</li>
        <li>JavaScript: A powerful scripting language that enables interactive web pages.</li>
        <li>React: A library for building user interfaces with components and managing state effectively.</li>
        <li>Node.js and Express: Server-side technologies for building scalable web applications.</li>
        <li>MongoDB: A NoSQL database used for storing application data.</li>
        <li>RESTful APIs: Concepts for designing networked applications, allowing different systems to communicate with each other.</li>
        <li>Git: A version control system for tracking changes in source code during development.</li>
      </ul>
    </main>
  );
}

export default HomePage;
