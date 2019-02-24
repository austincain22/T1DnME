import React, { Component } from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { db } from '../../Config/fire'
// import Posts from '../../Pages/PostsPage'

export class ForumsList extends Component {
  constructor (props) {
    super(props)
    this.handleTaskClick = this.handleTaskClick.bind(this)
    this.state = {
      taskPressed: true,
      posts: []
    }
  }
  getPosts = async () => {
    const postName = await db
      .collection('Posts')
      .where('forumID', '==', this.state.forumID)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    console.log('Forum Names: ', postName)

    this.setState({
      posts: postName
    })
  }

  getPosts = async id => {
    const forumID = await id

    const postName = await db
      .collection('Posts')
      .where('forumID', '==', forumID)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    console.log('Forum Names: ', postName)

    this.setState({
      posts: postName
    })
  }

  handleTaskClick () {
    this.setState(prevState => ({
      taskPressed: !prevState.taskPressed
    }))
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes, forums } = this.props
    const { forumID, taskPressed } = this.state

    return (
      <div className={classes}>
        {forums.map(form => {
          return (
            // <Grid container justify='space-evenly' alignItems='center'>
            <Grid item>
              <Button
                onClick={(() => this.getPosts(form.id), this.handleTaskClick)}>
                {taskPressed && (
                  <Paper rounded='true' item xs={12} sm={6} md={4} lg={3}>
                    <div key={form.id}>
                      <p>{form.forumName}</p>
                    </div>
                  </Paper>
                )}
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
