import React, { Component } from 'react'

import '../Styles/User.css'
import { auth } from '../Config/fire'
import { db } from '../Config/fire';
import { provider } from '../Config/fire'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import fire from '../Config/fire'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SideBar from '../Components/SideBar.jsx';


const regStyles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  input: {
    padding: '2%'
  }
})


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      firstN: "",
      lastN: "",
    }
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.initializeDoc = this.initializeDoc.bind(this);
  }

  async initializeDoc() {
    const newUse = await db.collection('Users').doc(`${auth.currentUser.uid}`);
    await newUse.get().then(async () => {
      await newUse.set({      // create the document if it's a new user
        childrenID: [],
        firstName: this.state.firstN,
        lastName: this.state.lastN,
      });
    }).catch((error) => {   //if an error occurs, alert user of the error
      window.alert(error);
    });
  }

  async signUp(e) {
    e.preventDefault()
    if (this.state.firstN === "") {
      window.alert("Fill in your first name.");
    }
    else if (this.state.lastN === "") {
      window.alert("Fill in you last name.");
    }
    else {
      await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(async () => {
          await this.initializeDoc();
        })
        .catch(error => {
          window.alert(error)
        })
    }
  }

  async googleSignUp() {
    auth
      .signInWithPopup(provider)
      .then({})
      .catch(error => {
        window.alert(error)
      })
  }

  //handle changes from email and password
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} display="center">
        <Grid container spacing={24} justify="center" >
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h2>User Registration</h2>
              <form className={classes.input}>
                <Input onChange={this.handleChange} name="firstN" value={this.state.firstN} className={classes.input} fullWidth={true} placeholder="First Name" />
                <Input onChange={this.handleChange} name="lastN" value={this.state.lastN} className={classes.input} fullWidth={true} placeholder="Last Name" />
                <Input onChange={this.handleChange} name="email" value={this.state.email} className={classes.input} fullWidth={true} placeholder="Email..." />
                <Input onChange={this.handleChange} name="password" value={this.state.password} className={classes.input} fullWidth={true} placeholder="Password..." />
              </form>
              <Button onClick={this.signUp} className={classes.input} color="primary" fullWidth={true} size="large">Register</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
      // <div className='App'>
      //   <header className='App-header'>
      //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //     <input type='text' name='email' placeholder='Email...' />
      //     <input type='text' name='password' placeholder='Password...' />
      //     <button onClick={this.signUp}>Register</button>
      //     <button onClick={this.googleSignUp}>SignUp with Google</button>
      //   </header>
      // </div>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(regStyles)(Register)
