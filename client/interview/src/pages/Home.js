import React from "react";
import Data from "../components/Data"
import {
  StyledTitle,
  StyledSubTitle,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";
import { connect } from "react-redux";
function Home({authenticated,user}) {
  return (
    <div>
      <div>All Products</div>
      <Data user={user} authenticated={authenticated}/>
    </div>
  );
}
const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
  user: session.user,
});
export default connect(mapStateToProps) (Home);
