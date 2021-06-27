import React from "react";
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

//auth & redux

import {connect} from 'react-redux';
import {logoutUser} from "../auth/actions/userActions";

//React Router
import {useHistory} from 'react-router-dom'


function Favorite({logoutUser,user}) {
    
    const history = useHistory();
    console.log(user)
  return (
    <div>
      <Div>
      <StyledTitle size={65}>Favorite Products by {user.name}</StyledTitle>
 
      
      <FavoriteData/></Div>
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
