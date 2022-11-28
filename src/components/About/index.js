import React from 'react';
import coverImage from '/Users/melanypietrowski/Desktop/projects/mp-react-portfolio/src/assets/cover/HeroMelPie.001.jpeg';
import SocialFollow from '../../SocialFollow';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Mel Pietrowski</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Former HR professional. Having a little too much fun building things on the internet. 
          I completed the Web Development Bootcamp at the University of North Carolina at Charlotte in April of 2022. 
          Since then, I have completed projects that include usage of: 
          * HTML
          * Advanced CSS
          * JavaScript
          * Web, server, and third party APIs
          * Node JS
          * Object-Oriented Programming
          * Express.JS
          * SQL
          * Object-Relational Mapping
          * Model-View controller
          * NoSQL
          * Progressive Web Applications
          * React
          * Github and Gitlab 

         I have worked in collaborative projects, such as the Baby Shower Games Application that will be released to the public soon.
        </p>
      </div>
      <SocialFollow />
    </section>
  );
}

export default About;
