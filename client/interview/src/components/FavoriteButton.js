import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
function FavoriteButton(props) {
  const { favorite, onClickFavorite } = props;
  console.log(favorite);

  // const variables = {
  //     productId: data.title,
  //     userFrom: userid,
  //     productName: data.title,
  //     productImage: data.imageLink,
  //     productAuthor: data.author,
  //   };

  //  useEffect(() => {

  //   axios
  //   .post(
  //     "https://infinite-basin-79388.herokuapp.com/favorite/favorited",
  //     variables
  //   )
  //   .then((response) => {
  //     console.log(response)
  //     if (response.data.success) {

  //       setFavorited(response.data.favorites);
  //     } else {
  //       alert("Failed to get Favorite Information");
  //     }
  //   });

  //   }, []);

  //   const onClickFavorite = () => {
  //     if (Favorited) {
  //       //when already added
  //       axios
  //         .post(
  //           "https://infinite-basin-79388.herokuapp.com/favorite/removeFromFavorite",
  //           variables
  //         )
  //         .then((response) => {
  //           if (response.data.success) {

  //             setFavorited(!Favorited);
  //           } else {
  //             alert("Failed to remove from Favorites");
  //           }
  //         });
  //     } else {
  //       //when not adding yet
  //       axios
  //         .post(
  //           "https://infinite-basin-79388.herokuapp.com/favorite/addToFavorite",
  //           variables
  //         )
  //         .then((response) => {
  //           if (response.data.success) {
  //             setFavorited(!Favorited);
  //           } else {
  //             alert("Failed to add to Favorites");
  //           }
  //         });
  //     }
  //   };
  const buttonMessage = !favorite
    ? "Adicionar aos Favoritos"
    : "Remover dos Favoritos";
  return (
    <Button onClick={onClickFavorite}>
      {" "}
      <H1>{buttonMessage}</H1>
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
`;
const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: x-large;
  }
`;

export default FavoriteButton;
