import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logimg from "../../IMG/Login.png";
import logo from "../../IMG/hubspot.svg";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);

  const navi = useNavigate();

  //CompanyEmail
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  //Password
  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const LoginUser = async (userData) => {
    const url = "https://hub-spot-backend-link-ngd8q9qd1-nnarendra1787s-projects.vercel.app/data/login";
    const response = await axios.post(url, userData);
    setResponseData(response.data);
    console.log(response.data);
    console.log(responseData);

    if (response.data.token) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("company", response.data.userData.company);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("email", response.data.userData.email);
      localStorage.setItem("userId", response.data.userData._id);

      navi("/dashboard");
    } else {
      window.alert("Invalid Credential");
      navi("/");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    LoginUser(userData);
  };

  return (
    <div>
      <section className="RegisterMain">
        <section id="leftImgg">
          <img src={logimg} alt="/" loading="lazy" />
        </section>
        <section id="RightPart">
          <div className="rightLogo">
            <img src={logo} alt="/" />
          </div>
          <div className="TextSection">
            <h4>Welcome to Hubspot! 👋🏻</h4>
            <p>Please sign-in to your account and start the adventure</p>
          </div>
          <div className="info">
            <p>Admin Email:admin@demo.com/Pass:admin123</p>
            <p>Client Email:client@demo.com/Pass:client123</p>
          </div>
          <section className="Form">
            <div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="@gmail.com"
                  autoCorrect="email"
                  required="required"
                  value={email}
                  onChange={handleEmail}
                  placeholder="admin@demo.com"
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
                  required="required"
                  autoComplete="password"
                  autoCorrect="true"
                  value={password}
                  onChange={handlePassword}
                  placeholder="...."
                />
              </label>
            </div>
            <div className="mid-center">
              <label>
                <input type="checkbox" name="check" id="check" />
                Remember Me
              </label>
              <Link to="/forgot">Forgot Password</Link>
            </div>
            <button
              type="submit"
              value="submit"
              onClick={submitHandler}
              id="btn"
            >
              Login
            </button>
          </section>
          <div className="link">
            <p className="linkk">
              Not have an account? <Link to="/register">Sign in now</Link>
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

export default Loginpage;
