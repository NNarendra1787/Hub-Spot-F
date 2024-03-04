import React from "react";
import logoImg from "../IMG/hubspot-1.svg";
import "./Navbar.css";
import LogRegi from "./Log/LogRegi";

function Navbar() {
  return (
    <div>
      <nav className="Navbar">
        <section className="MainLogo">
          <img src={logoImg} alt="/" height="35px" viewBox=" 0 0 16 16" />
        </section>
        <section className="right">
          <div className="icons">
            <i className="fas fa-arrow-circle-up"></i><span className="namee">Upgread</span>
            <i className="fas fa-phone"></i>
            <i className="fas fa-store-alt"></i>
            <i className="fas fa-question-circle"></i>
            <i className="fas fa-cog"></i>
            <i className="fas fa-bell"></i>
          </div>
          <div className="logSign">
            {/* <i className="fas fa-user-circle"></i> */}
            <LogRegi />
          </div>
        </section>
        {/* <svg viewBox="0 0 16 16" height="32px" data-test-id="icon-hubspot-logo"></svg> */}
      </nav>
    </div>
  );
}

export default Navbar;
