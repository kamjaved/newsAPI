import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <section id="form">
          <div class="container">
            <div class="row">
              <div class="col-sm-4 col-sm-offset-1">
                <div class="login-form">
                  <h2>Login to your account</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <span>
                      <input type="checkbox" class="checkbox" />
                      Keep me signed in
                    </span>
                    <button type="submit" class="btn btn-default">
                      Login
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-sm-1">
                <h2 class="or">OR</h2>
              </div>
              <div class="col-sm-4">
                <div class="signup-form">
                  <h2>New User Signup!</h2>
                  <form action="#">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" class="btn btn-default">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
