import React from "react";
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../components/Styles";

import Logo from "../assets/logo.jpg";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";
//Icons
import { FiMail, FiLock } from "react-icons/fi";

//Loader

import Loader from "react-loader-spinner";

//auth & redux
import {connect} from 'react-redux';
import {loginUser} from "../auth/actions/userActions";
import {useHistory} from "react-router-dom"


function Login({loginUser}) {

    const history = useHistory()
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Member Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting,setFieldError }) => {
            console.log(values);
            loginUser(values,history,setFieldError,setSubmitting)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Adress"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                icon={<FiLock />}
              />
              <ButtonGroup>
               {!isSubmitting && 
                <StyledFormButton type="submit">Login</StyledFormButton>}

                {isSubmitting && (
                    <Loader
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    widht={100}
                    />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Sign Up</TextLink>{" "}
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>
        All rights reserved - Gabriel Pasquantonio &copy;2021
      </CopyrightText>
    </div>
  );
}

export default connect(null,{loginUser})(Login);
