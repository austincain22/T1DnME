import React from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { db } from '../Config/fire'
import { ForumsList } from '../Components/Forums/Forums'
import { Posts } from './PostsPage'

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

class Forums extends React.Component {
  state = {
    forums: []
  }

  getForum = async () => {
    const forumName = await db
      .collection('Forums')
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    console.log('Forum Names: ', forumName)

    this.setState({
      forums: forumName
    })
  }

  // getPosts = async () => {
  //   const postName = await db
  //     .collection('Posts')
  //     .where('', '==')
  //     .get()
  //     .then(snapshot =>
  //       snapshot.docs.map(doc => {
  //         return {
  //           ...doc.data(),
  //           id: doc.id
  //         }
  //       })
  //     )

  //   console.log('Forum Names: ', postName)

  //   this.setState({
  //     posts: postName
  //   })
  // }

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
    const { forums } = this.state

    return (
      <div className={classes.root}>
        <Grid container justify='center' spacing={12}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <ForumsList forums={forums} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Forums.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Forums)
