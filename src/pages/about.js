import React from "react";
import pic from "../assets/img/luke.jpg";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <hr />
      <img src={pic}
        className="img-fluid float-left float-sm-right float-md-left float-lg-right float-xl-left px-4"
        alt="Photo of Luke"
        width="300px"
      />
      <h3>Introduction</h3>
      <p>My name is Luke Robinett and I am a lifelong resident of Portland, Oregon. As early as elementary school, I found myself drawn to technology. From a young age, I took a strong interest in learning to program. I would often find books in the school library on Basic programming and spend hours trying to write programs of my own on the library computer. My passion for coding would only grow as time went on. In high school I took Pascal and C courses, wetting my appetite for procedural and object oriented programming.</p>
      <p>As an adult, I continue expanding my knowledge of programming through a combination of professional experience, academic and self-guided learning. For the past three years I have held a role in the IT field as an information systems analyst where I utilize the .NET stack to create internal web applications, work with SQL Server databases and solve business problems using my expertise and passion for learning.</p>
      <p>In October of 2019 I began an intensive full stack coding boot camp offered by University of Oregon in partnership with Trilogy Learning Company. Here I have gained considerable new skills to augment my already deep level of coding knowledge, adding to my toolbelt a full suite of front end and back end technologies.</p>
      <h3>Technologies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>C#.NET</li>
        <li>ASP.NET</li>
        <li>SQL (MySQL, SQL Server, stored procedures and complex queries)</li>
        <li>PHP</li>
        <li>Node.JS</li>
        <li>React</li>
      </ul>
    </div>
  )
}

export default About;