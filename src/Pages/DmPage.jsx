import React, { Component } from 'react';

import '../Styles/GlobalStyles.css';
//import Form from '../Components/Form/Form.jsx';
import Grid from '@material-ui/core/Grid';

import db from "../Config/fire.jsx";




class DMing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    db.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new db.auth.GoogleAuthProvider();
    db.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    db.auth().signOut();
  }
  render() {
    return (
      <div className="app">
     <Grid container spacing={0}
          alignItems="center"
          justify="space-evenly"
          style={{
            minHeight: '100vh',
            minWidth: '200vh'
          }}>
        <div className="app__header">
          
          
          { !this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
          
        </div>
        <div className="app__list">
          {/*<Form user={this.state.user} />*/}
        </div>
        </Grid>
      </div>
    );
  }
}
export default DMing;