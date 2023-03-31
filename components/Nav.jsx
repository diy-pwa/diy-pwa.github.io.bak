import React, { useState } from 'react';
import './Nav.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function (props) {
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <nav>
      {/*<!-- Navbar (sit on top) -->*/}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
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
            href="javascript:void(0)"
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={toggle}
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      {/*<!-- Sidebar on small screens when clicking the menu icon -->*/}
      <div className={isOpened ? undefined : 'hidden'}>
        <div
          className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
          id="mySidebar"
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
      </div>
    </nav>
  );
}
