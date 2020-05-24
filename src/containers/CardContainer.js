import React, { Component } from "react";
import data from "../db";
//Here! import Card component here

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
            // HERE! return <Card /> component with assigned props character and props handleClick
            return <h1>{}</h1>
          })
        }
      </div>
    )
  }
}

export default CardContainer;