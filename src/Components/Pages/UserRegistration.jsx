import React, { Component } from 'react';

import '../../Styles/User.css';
import { auth } from '../../Config/fire';
import { db } from '../../Config/fire';
import { provider } from '../../Config/fire';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.signUp = this.signUp.bind(this);
  }

  async signUp(e) {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then({
      //User signed in
    }).catch((error) => {
      window.alert(error)
    })
  }

  async googleSignUp() {
    auth.signInWithPopup(provider).then({

    }).catch((error) => {
      window.alert(error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <input type="text" name="email" placeholder="Email..." />
          <input type="text" name="password" placeholder="Password..." />
          <button onClick={this.signUp}>Register</button>
          <button onClick={this.googleSignUp}>SignUp with Google</button>
        </header>
      </div>
    );
  }
}

export default UserRegistration;
