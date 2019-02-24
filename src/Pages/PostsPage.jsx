import React from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { db } from '../Config/fire'
import { ForumsList } from '../Components/Forums/Forums'

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

class Posts extends React.Component {
  handleChange = (event, value) => {
    this.setState({ value })
  }
  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  async componentDidMount () {
    this.getForum()
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container justify='center' spacing={12}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <ForumsList forums={this.state.forums} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts)
