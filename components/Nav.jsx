import React, { useState } from 'react';
import './Nav.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function (props) {
  const [sClassName, setsClassName] = useState("w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large hidden");
  function toggle() {
    if (sClassName.includes("hidden")) {
      setsClassName(sClassName.replace(" hidden", ""));
    } else {
      setsClassName(sClassName + " hidden");
    }
  }

  return (
    <nav>
      {/*<!-- Navbar (sit on top) -->*/}
      <div className="w3-bar w3-white w3-card w3-top">
        <a href={props.navData.to} className="w3-bar-item w3-button w3-wide">
          {props.navData.text}
        </a>
        {/*<!-- Right-sided navbar links -->*/}
        <div className="w3-right w3-hide-small">
          {props.navData.items.map((item) => (
            <a href={item.to} className="w3-bar-item w3-button">
              {item.text}
            </a>
          ))}
        </div>
        {/*<!-- Hide right-floated links on small screens and replace them with a menu icon -->*/}

        <a
          href="#"
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          onClick={toggle}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>

      {/*<!-- Sidebar on small screens when clicking the menu icon -->*/}
      <div
        className={sClassName}
      >
        <a
          href="#"
          onClick={toggle}
          className="w3-bar-item w3-button w3-large w3-padding-16"
        >
          Close &times;
        </a>
        {props.navData.items.map((item) => (
          <a
            href={item.to}
            onClick={toggle}
            className="w3-bar-item w3-button"
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}