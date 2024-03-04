import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import ThirdBox from "./ThirdBox";

const Navbar2 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <nav className="navbar">
        <section>
          <div className="duckduck">
            <label>Contacts</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#253342" : "#253342",
                  })}
                >
                  Contacts
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Companise
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Calls
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Active Feed
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  List
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Conversion</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Inbox
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Chatflows
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Snippets
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Templets
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Marketing</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Ads
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Email
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Lending Pages
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Website
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Social
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  SEO
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Campaigns
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Design Tools
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Forms
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Sales</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Prospecting
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Deals
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Forcast
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Tasks
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Documents
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Meetings
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Playbooks
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Products
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Commerce</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Payment
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Invoices
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Payment Links
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Quotes
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Subscriptions
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Service</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Tickets
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Feedback Surveys
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Knowledge Base
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Customer Portal
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Automation</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Sequences
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Workflows
                </NavLink>
              </div>
            </div>
          </div>
          <div className="duckduck">
            <label>Reports</label>
            <i className="fa-solid fa-angle-down"></i>
            <div className="dropdown-content">
              <div className="nav-item">
                <NavLink
                  exact
                  to="/dashboard"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Dashboard
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Reports
                </NavLink>
              </div>
              <hr />
              <div className="nav-item">
                <NavLink
                  exact
                  to="/example"
                  className="nav-links"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Data Management
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search HubSpot"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <section className="nav-3">
        <ThirdBox />
      </section>
    </div>
  );
};

export default Navbar2;
