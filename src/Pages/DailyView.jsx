import React, { Component } from 'react';

import '../Styles/GlobalStyles.css';
import DailyInput from '../Components/Daily/DailyInput.jsx';
import db from 'firebase';
import Grid from '@material-ui/core/Grid';

class DailyView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    
    render() {
      return (
          <div className="HomeMain">
             <Grid container spacing={0}
          alignItems="center"
          justify="space-evenly"
          style={{
            minHeight: '100vh',
            minWidth: '200vh'
          }}>
          <Grid item xs={24}>
          < DailyInput />
          </Grid>
                
                </Grid>
       
        </div>

            
        
          
      );
    }
  }
  export default DailyView;