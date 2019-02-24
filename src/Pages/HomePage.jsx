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
    
    return( 
        <div>
        <div className="HomeHeader">

        </div>
        <div className="SideBar">
        
        </div>
        <div className="HomeMain">
        
        
            <Grid container spacing={40}
            direction="row"
            justify="center"
            className="bodyContainer">
                <Grid item xs={10} className="gridItem">
                    <p className="bodyHead">
                        <h1>t1d and me</h1>
                    </p>
                </Grid>
                <Grid item xs={10} className="gridItem">
                    <img src={child} className="gridPic"></img>
                </Grid>

                
                
                </Grid>
            
        
        </div>
        </div>
    )
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Home)
