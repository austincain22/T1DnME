import React, { Component } from 'react'
import '../Styles/GlobalStyles.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import child from "../Images/child.jpg";

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

  class Home extends Component {
  render () {
    const { classes } = this.props
    return( 

        <div className="HomeMain">
        
        
            <Grid container spacing={24}
            direction="row"
            justify="center"
            className="bodyContainer">
                
                <Grid item xs={10} className="gridItem">
                    <img src={child} className="gridPic"></img>
                </Grid>

                <Grid item xs={10} className="gridItem">
                    <Paper/>
                </Grid>
                
                </Grid>
        
        
        </div>
    )
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Home)
