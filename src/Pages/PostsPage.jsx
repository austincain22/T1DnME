import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { db } from '../Config/fire'


export class PostsList extends Component {
  constructor (props) {
    super(props)
    this.handleIsClick = this.handleIsClick.bind(this)
    this.state = {
      isPressed: false,
      posts: []
    }
  }
  getPosts = async () => {
    const postName = await db
      .collection('Posts')
      //.where('forumID', '==', this.state.forumID)
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

//   getPosts = async id => {
//     const forumID = await id

//     const postName = await db
//       .collection('Posts')
//       //.where('forumID', '==', forumID)
//       .get()
//       .then(snapshot =>
//         snapshot.docs.map(doc => {
//           return {
//             ...doc.data(),
//             id: doc.id
//           }
//         })
//       )

//     console.log('Forum Names: ', postName)

//     this.setState({
//       posts: postName
//     })
//   }

  handleIsClick () {
    this.setState(prevState => ({
      isPressed: !prevState.isPressed
    }))
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes, isPressed } = this.props
    const {  posts } = this.state

    return (
      <div className={classes}>
        {posts.map(post => {
          return (
            // <Grid container justify='space-evenly' alignItems='center'>
            <Grid item>
              <Button
                onClick={(() => this.getPosts(), this.handleIsClick)}>
                {(
                  <Paper rounded='true' item xs={12} sm={6} md={4} lg={3}>
                    <div key={post.id}>
                      <p>{post.forumName}</p>
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

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostsList
