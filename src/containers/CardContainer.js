// step 1: import Card Component
// step 2: render Card Component inside map method
// step 3: pass character, handleClick and set key as character.id

import React, { Component } from "react";
import data from "../db";

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
            return <h1>{character.name}</h1>
          })
        }
      </div>
    )
  }
}

export default CardContainer;