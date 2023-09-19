
import React from 'react';

function Card({person}) {
  return(
    <div>
      <img alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{person.title}</h2>
        <p>{person.description}</p>
      </div>
    </div>
  );
}

export default Card;