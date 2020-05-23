// step 1: create handleClick function to close Modal 
// step 2: 

import React from "react";
import CardContainer from "./containers/CardContainer";
import "./styles.css";

class App extends React.Component {

  state = {
    character: "",
    showModal: false
  };

  handleClick = (character) => {
    this.setState({
      character: character,
      showModal: true
    });
  };
  
  render() {
    return (
        <div className="App">
          {/* insert Banner here */}
          
          <CardContainer handleClick={this.handleClick} />
          
        </div>
    );
  }
}

export default App;
