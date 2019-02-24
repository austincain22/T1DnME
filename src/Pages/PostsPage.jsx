// import React, { Component } from 'react'
// // import styles from '../Styles/index.css';
// import PropTypes from 'prop-types'
// // import { withStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import { db } from '../Config/fire'

// export class Posts extends Component {
//   getPosts = async () => {
//     const postName = await db
//       .collection('Posts')
//       .where('forumID', '==', forumID)
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

//   render () {
//     const { classes } = this.props
//     const { posts } = this.state

//     return (
//       <div className={classes}>
//         {posts.map(post => {
//           return (
//             <Grid item>
//               {/* <Button> */}
//               <Paper rounded='true' item xs={12} sm={6} md={4} lg={3}>
//                 <div key={post.id}>
//                   <p>{post.forumName}</p>
//                 </div>
//               </Paper>
//               {/* </Button> */}
//             </Grid>
//           )
//         })}
//       </div>
//     )
//   }
// }

// Posts.propTypes = {
//   forums: PropTypes.array.isRequired
// }

// export default Posts
