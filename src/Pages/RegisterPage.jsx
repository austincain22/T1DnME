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


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.signUp = this.signUp.bind(this)
  }

  async signUp(e) {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then({
        // User signed in
      })
      .catch(error => {
        window.alert(error)
      })
  }

  async googleSignUp() {
    auth
      .signInWithPopup(provider)
      .then({})
      .catch(error => {
        window.alert(error)
      })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={3} >
            <Paper className={classes.paper}>
              User Registration
              <form>
                <Input fullWidth={true} placeholder="Email..." />
                <Input fullWidth={true} placeholder="Password..." />
              </form>
              <Button color="primary" fullWidth={true} size="large">Register</Button>
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

export default withStyles(styles)(Register)
