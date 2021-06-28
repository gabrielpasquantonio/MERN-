import React, { useState, useEffect } from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors
} from "../components/Styles";
import FavoriteData from "../components/FavoriteData";
import styled from 'styled-components'
import axios from 'axios'
//auth & redux

import {connect} from 'react-redux';
import {logoutUser} from "../auth/actions/userActions";

//React Router
import {useHistory} from 'react-router-dom'


function Favorite({logoutUser,user}) {
  const [favorites, setFavorites] = useState([]);
  const _id = user._id;
  useEffect(() => {
    
    _id &&
      axios
        .post("https://infinite-basin-79388.herokuapp.com/favorite/getFavoritedProducts", { _id })
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            // setFavorited(response.data.favorites);
            
            setFavorites(response.data.favorites);
          } else {
            alert("Failed to get Favorite Information");
          }
        });
  }, [user._id]);  



    const history = useHistory();
    console.log(user)
  return (
    <div>
      <Div>
      <StyledTitle size={65}>Favorite Products by {user.name}</StyledTitle>
 
      {favorites && favorites.length > 0 &&
      <FavoriteData favorite={favorites}/>}</Div>
    </div>
  );
}


const Div = styled.div`
margin-top: 50px;
`;
const mapStateToProps = ({session}) => ({
user:session.user

})


export default connect(mapStateToProps,{logoutUser}) (Favorite);
