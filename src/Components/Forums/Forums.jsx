import React, { Component } from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import { db } from '../../Config/fire'

export class ForumsList extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

ForumsList.propTypes = {
  forums: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default ForumsList