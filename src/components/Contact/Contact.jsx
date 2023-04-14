import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="leftContact">
        <h2>Subscribe to our mailing list</h2>
        <label>Enter your email:</label>
        <input className="inputStyles" type="text" />
        <button className="sendBtn">Send</button>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14740.030480864343!2d88.3868054!3d22.5413873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02768ae3fc9053%3A0xfbc1540ebc29ce5d!2sZeeshan%20Construction!5e0!3m2!1sen!2sin!4v1681233171233!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:'0'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
