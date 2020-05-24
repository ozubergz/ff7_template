import React from "react";
import "./styles.css";
import CardContainer from "./containers/CardContainer";
import Modal from "./components/Modal";
import Banner from "./components/Banner";

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
  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }
  
  render() {
    return (
        <div className="App">
          <Banner />
          
          <CardContainer 
            handleClick={this.handleClick}
          />

          {
            this.state.showModal ?
              <Modal 
                character={this.state.character}
                // pass handleClose function as props
              /> 
                : 
              null
          }
          
        </div>
    );
  }
}

export default App;
