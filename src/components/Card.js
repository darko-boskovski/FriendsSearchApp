import React from "react";

const Card = (props) => {
  return (
    <div className="card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`${props.picture}`} alt="friends"></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
