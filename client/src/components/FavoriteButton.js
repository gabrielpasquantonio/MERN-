import React from "react";
import styled from "styled-components";
function FavoriteButton(props) {
  const { favorite, onClickFavorite } = props;


  const buttonMessage = !favorite
    ? "Add to Favorites"
    : "Remove from Favorites";
  return (
    <Button onClick={onClickFavorite}>
      {" "}
      <H1>{buttonMessage}</H1>
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: x-large;
  }
  
`;

export default FavoriteButton;
