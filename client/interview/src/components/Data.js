import React, { useState, useEffect } from "react";
import customData from "./data.json";
import styled from "styled-components";

import FavoriteButton from "./FavoriteButton";
import axios from "axios";

function Data({ authenticated, user }) {
  const [products, setProducts] = useState(customData);
  const _id = user._id;
  //const [Favorited, setFavorited] = useState(false);
  console.log(user._id);

  useEffect(() => {
    _id &&
      axios
        .post("https://infinite-basin-79388.herokuapp.com/favorite/getFavoritedProducts", { _id })
        .then((response) => {
          if (response.data.success) {
            // setFavorited(response.data.favorites);
            const array = customData.map((product) => {
              const favorite = response.data.favorites.find(
                (favoriteItem) => favoriteItem === product.title
              );
              const result = {
                ...product,
                favorite: favorite ? true : false,
              };
              return result;
            });
            setProducts(array);
          } else {
            alert("Failed to get Favorite Information");
          }
        });
  }, [user._id]);

  const onClickFavorite = (favorite, title) => {
    const payload = {
      userFrom: user._id,
      favorite: title,
    };
    if (favorite) {
      //when already added
      axios
        .post("https://infinite-basin-79388.herokuapp.com/favorite/removeFromFavorite", payload)
        .then((response) => {
          if (response.data.success) {
            //setFavorited(!Favorited);
            const array = products.map((product) => {
              if (product.title === title) {
                return {
                  ...product,
                  favorite:false
                }
              }
              return product
              
            });
            setProducts(array);
          } else {
            alert("Failed to remove from Favorites");
          }
        });
    } else {
      //when not adding yet
      axios
        .post("https://infinite-basin-79388.herokuapp.com/favorite/addToFavorite", payload)
        .then((response) => {
          if (response.data.success) {
            //setFavorited(!Favorited);
            const array = products.map((product) => {
              if (product.title === title) {
                return {
                  ...product,
                  favorite:true
                }
              }
              return product
              
            });
            setProducts(array);
          } else {
            alert("Failed to add to Favorites");
          }
        });
    }
  };

  return (
    <div className="App">
      <Content>
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <Card>
              <Wrap key={item.title}>
                <p>{item.author}</p>{" "}
                <img src={`../${item.imageLink}`} alt={item.author} />
              </Wrap>
              <Bottom>
                <Div>
                  <SubDiv>
                    <div>
                      <H4>Author: {item.author} </H4>
                    </div>
                    <div>
                      <H4> Title: {item.title}</H4>
                    </div>
                  </SubDiv>
                  {authenticated && user ? (
                    <SubDiv>
                      <FavoriteButton
                        onClickFavorite={() =>
                          onClickFavorite(item.favorite, item.title)
                        }
                        favorite={item.favorite}
                      />
                    </SubDiv>
                  ) : (
                    <SubDiv
                      onClick={() =>
                        alert("Please log in before add to favorite")
                      }
                    >
                      <Button>Add to Favorite</Button>
                    </SubDiv>
                  )}
                </Div>
              </Bottom>
            </Card>
          ))}
      </Content>
    </div>
  );
}

const Button = styled.button``;

const H4 = styled.h4`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: smaller;
  }
`;
const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: x-large;
  }
`;
const Content = styled.div`
  padding: 10px;
  margin-top: 100px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 10px;
  }
`;

const Card = styled.div`
  background-color: rgb(249, 249, 249);
  color: #090b13;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgb(249, 249, 249);
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
const Bottom = styled.div`
  display: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    margin-top: 5px;
    padding: 10px;
  }
  @media (max-width: 1280px) {
    margin-top: 5px;
    padding: 10px;
  }
`;
const Div = styled.div`
  display: row;
`;
const SubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export default Data;
