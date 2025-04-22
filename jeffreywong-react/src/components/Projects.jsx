import React from 'react';
import project1 from '../assets/project1.png';

export default function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Recent Work</p>
      <h1 className="title">Projects</h1>
      <div
        className="section-container"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <div
          className="details-container"
          style={{ minWidth: '500px', maxWidth: '900px', padding: '20px' }}
        >
          <img src={project1} alt="Project 1" className="project-img" />
          <h3>Algorithm Tools</h3>
          <p>Built using React.js, Node.js, phpMyAdmin, and designed with Figma.</p>
          <p>A platform offering interactive algorithm visualizations and quizzes for learning BFS, DFS, Dijkstra’s and more</p>
        </div>
      </div>
    </section>
  );
}
