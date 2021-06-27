import React from "react";
import "./CreateForm.css";
import { Formik, Form} from "formik";
import TextField from "./TextField.jsx";
import * as Yup from "yup";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";
import { createUser } from "../redux/action";
import { useDispatch, useSelector,connect } from "react-redux";

function SignUpForm() {
    const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  
    
  };
console.log(profile)
  const validate = Yup.object().shape({
    username: Yup.string()
    .min(4, "Must have at least 4 characters")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
      password: Yup.string()
    .min(6, 'Password must be at lease  15 6 characters')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      dispatch={dispatch}
      onSubmit={async (values, { resetForm }) => {
      await new Promise((r) => setTimeout(r, 500));
       await dispatch(createUser(values));
       resetForm();
      }}
    >
      {(formik) => (
        <div>
          <div
            className="my-4 font-weight-bold-display-4"
            className="contact-title"
          >
            <H2>Sign Up</H2>
          </div>
          <Form className="Form">
            <Diiv className="form-field" name="id" />
            <div className="form-field">
              <TextField
                label="Username*"
                name="username"
                type="text"
                className="inputt"
              />
            </div>
            <div className="form-field">
            <TextField label="Enter your email*" name="email" type="email" className="inputt"/>
            </div>
            <div className="form-field">
            <TextField label="Password" name="password" type="password" className="inputt" />
            </div>
            <div className="form-field">
            <TextField label="Confirm Password" name="confirmPassword" type="password" className="inputt"/>
            </div>      
            {<pre>{JSON.stringify(formik, null, 4)}</pre>}
            <div className="but">
              <div className="form-field f-button">
                <PrimaryButton title="Sign Up" type="submit" formik={formik} />
              </div>

              <div className="form-field f-button">
                <ResetButton className="buttin" type="reset">
                  Reset
                </ResetButton>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

const Diiv = styled.div`
  display: none;
`;
const ResetButton = styled.button`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
  @media (max-width: 508px) {
    padding: 0.4rem 1.5rem;
    font-size: small;
  }
`;
const H2 = styled.h2`
  margin-top:90px;
  font-size: 30px;
  margin-bottom: 20px;
  color: var(--font-light-color);
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;


export default   connect(null, { createUser })(SignUpForm);