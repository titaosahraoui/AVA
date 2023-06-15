import React, { useEffect } from "react";
import logo from "../images/logo-no-background.png";
import "./logincss.css";

// const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const fistForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");

// signInBtn.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// signUpBtn.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// fistForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());

const Login = () => {
  useEffect(() => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());
  }, []); // Empty dependency array to run the effect only once after the component is mounted

  return (
    <>
      <div className="loginpage">
        <div className="container right-panel-active">
          {/* <!-- Sign Up --> */}
          <div className="container__form container--signup">
            <form action="#" className="form" id="form1">
              <h2 className="form__title">Sign Up</h2>
              <input type="text" placeholder="User" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="btn">Sign Up</button>
            </form>
          </div>

          {/* <!-- Sign In --> */}
          <div className="container__form container--signin">
            <form action="#" className="form" id="form2">
              <h2 className="form__title">Sign In</h2>
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <a href="#" className="linklogin">
                Forgot your password?
              </a>
              <button className="btn">Sign In</button>
            </form>
          </div>

          {/* <!-- Overlay --> */}
          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="login">
        <div className="logo flex justify-center items-center">
          <img
            className="img w-[25%] mt-10 transition-all duration-500 ease-in "
            src={logo}
            alt=" Avalanche"
          />
        </div>
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>LOGIN</h2>
              <div className="underline-title"></div>
            </div>
            <form method="post" className="form">
              <label htmlFor="user-email">&nbsp;Email</label>
              <input
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                autoComplete="on"
                required
              />
              <div className="form-border"></div>
              <label htmlFor="user-password">&nbsp;Password</label>
              <input
                id="user-password"
                className="form-content"
                type="password"
                name="password"
                required
              />
              <div className="form-border"></div>
              <a href="#">
                <legend id="forgot-pass">Forgot password?</legend>
              </a>
              <input
                id="submit-btn"
                type="submit"
                name="submit"
                value="LOGIN"
              />
              <a href="#" id="signup">
                Don't have account yet?
              </a>
            </form>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Login;
