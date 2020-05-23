import React from 'react';

const Modal = (props) => {
  const { character, handleCloseClick } = props;
  return(
    <div className="modal">
      <div className="modal-box">
        <img src={character.image} className="modal-image" alt={character.name} />
        <div className="modal-body">
          <h1>{character.name}</h1>
          <h3>{character.japanese}</h3>
          <div className="table">
            <div className="columns col-1">
              <span>Age: </span>
              <span>Birthday: </span>
              <span>Occupation: </span>
            </div>
            <div className="columns col-2">
              <span>{character.age}</span>
              <span>{character.birthday}</span>
              <span>{character.occupation}</span>
            </div>
          </div>
          <div className="summary">
            <h4>Summary:</h4>
            <p>{character.summary}</p>
          </div>
          <button onClick={handleCloseClick}>CLOSE</button>
        </div>
      </div>     
    </div>
  )
}

export default Modal;


