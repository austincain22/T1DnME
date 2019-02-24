import React, { Component } from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// import { db } from '../../Config/fire'

export class ForumsList extends Component {
  render () {
    const { classes, forums } = this.props

    return (
      <div className={classes}>
        {forums.map(form => {
          return (
            // <Grid container justify='space-evenly' alignItems='center'>
            <Grid item>
              <Button>
                <Paper rounded='true' item xs={12} sm={6} md={4} lg={3}>
                  <div key={form.id}>
                    <p>{form.forumName}</p>
                  </div>
                </Paper>
              </Button>
            </Grid>
          )
        })}
      </div>
    )
  }
}

ForumsList.propTypes = {
  forums: PropTypes.array.isRequired
}

export default ForumsList
