// step 1: import Card Component
// step 2: render Card Component inside map method

import React, { Component } from "react";
import data from "../db";
import Card from "../components/Card";

class CardContainer extends Component {

  state = {
    characters: []
  }
  
  componentDidMount() {
    this.setState({ 
      characters: data
    });
  }

  render() {    
    return(
      <div className="card-container">
        {
          this.state.characters.map(character => {
            // use Card component pass each character as props
            // pass handleClick as props
          //  return <h1>{}</h1>
            return <Card character={character} handleClick={this.props.handleClick} />
          })
        }
      </div>
    )
  }
}

export default CardContainer;