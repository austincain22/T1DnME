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
  },
  input: {
    padding: '2%'
  }
})

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async login(e) {
    e.preventDefault()
    await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
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
      <div className={classes.root}>

        <Grid container spacing={0}
          alignItems="center"
          justify="center"
          style={{
            minHeight: '100vh',
            minWidth: '200vh'
          }}>
          <Grid item xs={3} zeroMinWidth>
            <Paper className={classes.paper}>
              <h2>User Login</h2>
              <form className={classes.input}>
                <Input onChange={this.handleChange} name="email" value={this.state.email} className={classes.input} fullWidth={true} placeholder="Email..." />
                <Input onChange={this.handleChange} name="password" value={this.state.password} className={classes.input} fullWidth={true} placeholder="Password..." />
              </form>
              <Button onClick={this.login} className={classes.input} color="primary" fullWidth={true} size="large">Register</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
