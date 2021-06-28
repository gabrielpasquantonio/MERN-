import React from "react";
import Data from "../components/Data"
import styled from "styled-components"
import { connect } from "react-redux";
function Home({authenticated,user}) {
  return (
    <div>
      <Div><H1>All Products</H1></Div>
      <Data user={user} authenticated={authenticated}/>
    </div>
  );
}

const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: x-large;
  }
  color: white;
`;
const Div = styled.div`
margin-top:100px
`;
const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
  user: session.user,
});
export default connect(mapStateToProps) (Home);
