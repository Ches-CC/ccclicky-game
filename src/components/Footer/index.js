import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer id="sticky-footer" className="footer fixed-bottom bg-dark text-white-50">
        <div className="container text-center text-light">
          <p>Copyright &copy; 2019</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
