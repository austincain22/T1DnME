//this is the rendering component of the dailyview page
import React, { Component } from 'react';
import '../../Styles/GlobalStyles.css'
import db from 'firebase';
import Grid from '@material-ui/core/Grid';


class DailyInput extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedDay: this.getTodaysDate(),
            wakeUpBS: "",
            wakeUpNotes: "",
            wakeUpFood: "",
            breakfastBS: "",
            breakfastNotes: "",
            breakfastFood: "",
            midMorningBS: "",
            midMorningNotes: "",
            midMorningFood: "",
            lunchBS: "",
            lunchNotes: "",
            lunchFood: "",
            afterSchoolBS: "",
            afterSchoolNotes: "",
            afterSchoolFood: "",
            dinnerBS: "",
            dinnerNotes: "",
            dinnerFood: "",
            bedtimeBS: "",
            bedtimeNotes: "",
            bedtimeFood: "",
            midnightBS: "",
            midnightNotes: "",
            midnightFood: "",
        loadingItems: true,
        removingItem: false
      }
    }
  
    getTodaysDate() {
      return new Date(Date.now() - (60000 * new Date().getTimezoneOffset()));
    }
  
  
    componentDidMount() {
      
      this.setState({
        selectedDay: this.getTodaysDate(),
       
          wakeUpBS: "",
          wakeUpNotes: "",
          wakeUpFood: "",
          breakfastBS: "",
          breakfastNotes: "",
          breakfastFood: "",
          midMorningBS: "",
          midMorningNotes: "",
          midMorningFood: "",
          lunchBS: "",
          lunchNotes: "",
          lunchFood: "",
          afterSchoolBS: "",
          afterSchoolNotes: "",
          afterSchoolFood: "",
          dinnerBS: "",
          dinnerNotes: "",
          dinnerFood: "",
          bedtimeBS: "",
          bedtimeNotes: "",
          bedtimeFood: "",
          midnightBS: "",
          midnightNotes: "",
          midnightFood: "",
        loadingItems: true,
        removingItem: false
      })
      
    }
    
  
    
    render() {
      const {
          wakeUpBS,
          wakeUpNotes,
          wakeUpFood,
          breakfastBS,
          breakfastNotes,
          breakfastFood,
          midMorningBS,
          midMorningNotes,
          midMorningFood,
          lunchBS,
          lunchNotes,
          lunchFood,
          afterSchoolBS,
          afterSchoolNotes,
          afterSchoolFood,
          dinnerBS,
          dinnerNotes,
          dinnerFood,
          bedtimeBS,
          bedtimeNotes,
          bedtimeFood,
          midnightBS,
          midnightNotes,
          midnightFood,
          handleAddTaskChange
      } = this.props;
  
      return (
        
        <div className="HomeMain">
                <p>This is the main container for the component</p>
                
            
            <div>
                <p>thus begins the input </p>
                <form>
                  <label>
                    Wake-up Blood Sugar:
                    <input
                      type="text"
                      name="wakeUpBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={wakeUpBS}
                    />
                  </label>
                  <br />
                  <label>
                    Wake-up Notes:
                    <input
                      type="text"
                      name="wakeUpNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={wakeUpNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Wake-up Food:
                    <input
                      type="text"
                      name="wakeUpFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={wakeUpFood}
                    />
                  </label>
                  <br />
                  <label>
                    Breakfast Blood Sugar:
                    <input
                      type="text"
                      name="breakfastBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={breakfastBS}
                    />
                  </label>
                  <br />
                  <label>
                    Breakfast Notes:
                    <input
                      type="text"
                      name="breakfastNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={breakfastNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Breakfast Food:
                    <input
                      type="text"
                      name="breakfastFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={breakfastFood}
                    />
                  </label>
                  <br />
                  <label>
                    Mid-morning Blood Sugar:
                    <input
                      type="text"
                      name="midMorningBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={midMorningBS}
                    />
                  </label>
                  <br />
                  <label>
                    Mid-morning Notes:
                    <input
                      type="text"
                      name="midMorningNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={midMorningNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Mid-morning Food:
                    <input
                      type="text"
                      name="midMorningFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={midMorningFood}
                    />
                  </label>
                  <br />
                  <label>
                    Lunch Blood Sugar:
                    <input
                      type="text"
                      name="lunchBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={lunchBS}
                    />
                  </label>
                  <br />
                  <label>
                    Lunch Notes:
                    <input
                      type="text"
                      name="lunchNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={lunchNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Lunch Food:
                    <input
                      type="text"
                      name="lunchFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={lunchFood}
                    />
                  </label>
                  <br />
                  <label>
                    After School Blood Sugar:
                    <input
                      type="text"
                      name="afterSchoolBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={afterSchoolBS}
                    />
                  </label>
                  <br />
                  <label>
                    After School Notes:
                    <input
                      type="text"
                      name="afterSchoolNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={afterSchoolNotes}
                    />
                  </label>
                  <br />
                  <label>
                    After School Food:
                    <input
                      type="text"
                      name="afterSchoolFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={afterSchoolFood}
                    />
                  </label>
                  <br />
                  <label>
                    Dinner Blood Sugar:
                    <input
                      type="text"
                      name="dinnerBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={dinnerBS}
                    />
                  </label>
                  <br />
                  <label>
                    Dinner Notes:
                    <input
                      type="text"
                      name="dinnerNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={dinnerNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Dinner Food:
                    <input
                      type="text"
                      name="dinnerFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={dinnerFood}
                    />
                  </label>
                  <br />
                  <label>
                    Bedtime Blood Sugar:
                    <input
                      type="text"
                      name="bedtimeBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={bedtimeBS}
                    />
                  </label>
                  <br />
                  <label>
                    Bedtime Notes:
                    <input
                      type="text"
                      name="bedtimeNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={bedtimeNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Bedtime Food:
                    <input
                      type="text"
                      name="bedtimeFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={bedtimeFood}
                    />
                  </label>
                  <br />
                  <label>
                    Midnight Blood Sugar:
                    <input
                      type="text"
                      name="midnightBS"
                      onChange={event => handleAddTaskChange(event)}
                      value={midnightBS}
                    />
                  </label>
                  <br />
                  <label>
                    Midnight Notes:
                    <input
                      type="text"
                      name="midnightNotes"
                      onChange={event => handleAddTaskChange(event)}
                      value={midnightNotes}
                    />
                  </label>
                  <br />
                  <label>
                    Midnight Food:
                    <input
                      type="text"
                      name="midnightFood"
                      onChange={event => handleAddTaskChange(event)}
                      value={midnightFood}
                    />
                  </label>
                  </form>
            </div> 
        </div>  
        
      );
    }
    }


  
  
  export default DailyInput;
  