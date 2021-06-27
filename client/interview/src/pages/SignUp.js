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
import { FiMail, FiLock, FiCalendar,FiUser } from "react-icons/fi";

//Loader

import Loader from "react-loader-spinner";

//auth & redux
import {connect} from 'react-redux';
import {signupUser} from "../auth/actions/userActions";
import {useHistory} from "react-router-dom";


function SignUp({signupUser}) {
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
            repeatPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string()
            .required("Required"),
            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")],"Passwords must match"),
          })}
          onSubmit={(values, { setSubmitting,setFieldError }) => {
            console.log(values);
            signupUser(values,history,setFieldError,setSubmitting)
          }}
        >
          {({ isSubmitting }) => (
            
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Your Name"
                icon={<FiUser />}
              />
               
              <TextInput
                name="email"
                type="text"
                label="Email Adress"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />
               
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                placeholder="olga1@example.com"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                icon={<FiLock />}
              />
               <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="******"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">SignUp</StyledFormButton>
                )}

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
          Already have an account? <TextLink to="/login">Login</TextLink>{" "}
        </ExtraText>
      </StyledFormArea>
      <CopyrightText>
        All rights reserved - Gabriel Pasquantonio &copy;2021
      </CopyrightText>
    </div>
  );
}

export default connect(null,{signupUser}) (SignUp);
