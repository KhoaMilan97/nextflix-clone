import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = emailAddress === "" || password === "";
  const isSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={isSignin}>
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
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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
