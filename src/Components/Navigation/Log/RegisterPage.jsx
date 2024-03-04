import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../../IMG/Register2.png";
import logo from "../../IMG/hubspot.svg";
import "./LogRe.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");

  const [responseData, setReponseData] = useState(null);

  const navi = useNavigate();

  //for name
  const HandleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  //for Company
  const HandleCompany = (event)=>{
    event.preventDefault()
    setCompany(event.target.value);
  }

  //For Email
  const HandleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  //For Website
  const HandleUrl = (event) => {
    event.preventDefault();
    setWebsite(event.target.value);
  };
  //For Password
  const HandlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const RegisterUser = async (clientData) => {
    const url = "https://hub-spot-backend-link-ngd8q9qd1-nnarendra1787s-projects.vercel.app/data/register";
    const response = await axios.post(url, clientData);
    setReponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(response.data.token);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("company", response.data.company)
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("website", response.data.website);

      navi("/dashboard");
      console.log(responseData);
    } else {
      window.alert("already Register user");
      navi("/login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      company: company,
      email: email,
      website: website,
      password: password,
    };
    setName("");
    setCompany("");
    setEmail("");
    setWebsite("");
    setPassword("");
    RegisterUser(clientData);
  };

  return (
    <div>
      <section className="RegisterMain">
        <section id="leftImg">
          <img src={RegisterImg} alt="/" loading="lazy" />
        </section>
        <section id="RightPart">
          <div className="rightLogo">
            <img src={logo} alt="/" />
          </div>
          <div className="TextSection">
            <h5>Adventure start hear 🚀</h5>
            <h6>Make your app mangement easy and fun!</h6>
          </div>
          <section className="Form">
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  id="user"
                  required="true"
                  autoComplete="username"
                  autoCorrect="username"
                  value={name}
                  onChange={HandleName}
                  placeholder="Enter full Name"
                />
              </label>
            </div>
            <div>
              <label>
                CompanyName:
                <input
                  type="text"
                  name="companyname"
                  id="user"
                  required="true"
                  autoComplete="username"
                  autoCorrect="username"
                  value={company}
                  onChange={HandleCompany}
                  placeholder="Enter Company Name"
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="true"
                  autoComplete="@gmail.com"
                  autoCorrect="email"
                  value={email}
                  onChange={HandleEmail}
                  placeholder="companyemail@gmail.com"
                />
              </label>
            </div>
            <div>
              <label>
                Website:
                <input
                  type="url"
                  name="webiste"
                  id="website"
                  required="true"
                  autoComplete=".com"
                  autoCorrect=".com"
                  value={website}
                  onChange={HandleUrl}
                  placeholder="www.companywebsite.com"
                />
              </label>
            </div>
            <div>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  required="true"
                  autoComplete="pass"
                  autoCorrect="pass"
                  value={password}
                  onChange={HandlePassword}
                  placeholder="..........."
                />
              </label>
            </div>
            <div>
              <input type="checkbox" name="check" id="check" />I agree to{" "}
              <span>privacy policy and term</span>
            </div>
            <button
              type="submit"
              value="submit"
              onClick={handleSubmit}
              id="btn"
            >
              Sign Up
            </button>
          </section>
          <div className="link">
            <p className="linkk">
              Already have an account? <Link to="/login">Sign in instead</Link>
            </p>
          </div>
          <div className="line">
            <p className="or">or</p>
          </div>
          <section className="sponcers">
            <div>
            <i class="fab fa-facebook-f"></i>
            </div>
            <div>
            <i class="fab fa-google"></i>
            </div>
            <div>
            <i class="fab fa-twitter"></i>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default RegisterPage;

