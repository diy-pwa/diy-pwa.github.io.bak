import './InnerNav.css';

export default function (props) {
  return (
    <nav>
      {/*<!-- Navbar (sit on top) -->*/}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">LOGO</a>
          {/*<!-- Right-sided navbar links -->*/}
          <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
            <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> TEAM</a>
            <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
            <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
            <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
          </div>
          {/*<!-- Hide right-floated links on small screens and replace them with a menu icon -->*/}

          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      {/*<!-- Sidebar on small screens when clicking the menu icon -->*/}
      <div className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close &times;</a>
        <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">ABOUT</a>
        <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button">TEAM</a>
        <a href="#work" onclick="w3_close()" className="w3-bar-item w3-button">WORK</a>
        <a href="#pricing" onclick="w3_close()" className="w3-bar-item w3-button">PRICING</a>
        <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button">CONTACT</a>
      </div>
    </nav>
  );
}