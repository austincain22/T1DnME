import React from 'react'
// import styles from '../Styles/index.css';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { db } from '../Config/fire'
import { ForumsList } from '../Components/Forums/Forums'
import { PostsList } from './PostsPage'

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
    forums: [],
    handleTaskClick: this.handleTaskClick.bind(this)
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

  handleTaskClick() {
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

  async componentDidMount() {
    this.getForum()
  }

  render() {
    const { classes } = this.props
    const { forums } = this.state

    return (
      <div className={classes.root}>
        <Grid container spacing={0}
          alignItems="center"
          justify="space-evenly"
          style={{
            minHeight: '100vh',
            minWidth: '200vh'
          }}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
            <PostsList className={this.props.shouldHide ? 'hidden' : ''}/>
              <ForumsList
                forums={forums}
                className={this.props.shouldHide2 ? 'hidden' : ''}
              />
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
