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
            // HERE! return <Card /> component with assigned props character and props handleClick
            return <div></div>
          })
        }
      </div>
    )
  }
}

export default CardContainer;