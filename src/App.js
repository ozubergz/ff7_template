// step 1: first create a Banner component
// step 2: render Banncer component inside App Component
// step 3: create handleClose function to close Modal when clicking close button
// step 4: pass handleClose function to Modal component as props

import React from "react";
import CardContainer from "./containers/CardContainer";
import "./styles.css";
import Modal from "./components/Modal";

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
          
          <CardContainer 
            handleClick={this.handleClick}
          />

          {this.state.showModal ? <Modal character={this.state.character} /> : null}
          
        </div>
    );
  }
}

export default App;
