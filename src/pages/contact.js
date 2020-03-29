import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <hr />
      <h2 className="mt-4">LinkedIn</h2>
      <i className="fa fa-linkedin fa-2x"></i>
      <a href="https://www.linkedin.com/in/lucas-robinett/" target="_blank">View my LinkedIn Profile</a>
      <h2 className="mt-4">GitHub</h2>
      <i className="fa fa-github fa-2x"></i>
      <a href="https://github.com/luke-robinett" target="_blank">View my GitHub Account</a>
      <h2 className="mt-4">Email</h2>
      <i className="fa fa-envelope fa-2x"></i>
      <a href="mailto:info@lukerobinett.com">info@lukerobinett.com</a>
    </div>
  )
}

export default Contact;