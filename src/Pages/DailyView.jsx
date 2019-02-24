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
        {DailyInput}
            
        
          
      );
    }
  }
  export default DailyView;