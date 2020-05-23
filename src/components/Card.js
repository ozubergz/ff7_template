import React from "react";

const Card = (props) => {
  const { character, handleClick } = props;
  return(
    <div>
      <div 
        className="card" 
        onClick={() => handleClick(character)}
        style={{backgroundImage: `url(${character.image})`}}
      >
      </div>
    </div>
  );
}

export default Card;