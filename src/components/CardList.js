import React from "react";
import Card from "./Card";

const CardList = ({ friends }) => {
  const cardComponent = [];
  friends.forEach((element, i) => {
    return cardComponent.push(
      <Card
        key={friends[i].phone}
        id={friends[i].id}
        name={friends[i].name.first + " " + friends[i].name.last}
        email={friends[i].email}
        picture={friends[i].picture.large}
      />
    );
  });
  return <div>{cardComponent}</div>;
};
export default CardList;
