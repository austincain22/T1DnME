<<<<<<< Updated upstream

ReactDOM.render(
    <h1>Hello, world! This is the home page</h1>,
    document.getElementById('root')
  );
=======
import React, { Component } from 'react';
import '../../Styles/GlobalStyles.css';

class Home extends Component{

    render() {
        return (
            <div className="body">This is my home page</div>
        )
    }

}

export default Home;
>>>>>>> Stashed changes
