import React, { Component } from 'react';
import Recipes from './Recipes';
import './Login.css';

class Login extends Component {
  formValidate(evt) {
    let landingPage = document.getElementById('landing-page'),
        recipesContainer = document.getElementById('recipes-container');

    evt.preventDefault();
    landingPage.style.display = 'none';
    recipesContainer.style.display = 'block';
  }

  render() {
    return (
      <div>
        <div id="landing-page">
          <div className="container">
            <div className="inner-container">
              <div className="login">
                <h3>Log In</h3>
                <form name="loginForm" onSubmit={ this.formValidate } >
                  <label htmlFor="userEmail">Email</label><input id="userEmail" type="email" required placeholder="Please enter valid email address" /><br />
                  <label htmlFor="userPassword">Password</label><input id="userPassword" type="password" required pattern=".{7,}" placeholder="Please enter a password over 6 characters" /><br />
                  <input type="submit" value="Log in"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="recipes-container">
          <Recipes />
        </div>
      </div>
    );
  }
}

export default Login;
