import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

export default function Signup() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || emailAddress === "" || password === "";
  const isSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5 + 1),
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={isSignup}>
            <Form.Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <Form.Input
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email Address"
            />
            <Form.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="off"
              placeholder="Password"
            />
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
