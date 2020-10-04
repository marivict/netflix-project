import React, {useState} from 'react';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import {Form} from '../components';

export default function Signin () {
    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();

    }
    return(
        <>
          <HeaderContainer>
              <Form>
                  <Form.Title>Sign In</Form.Title>
                  {error && <Form.Error>{error}</Form.Error>}
                  <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange ={({target})=>setEmailAddress(target.value)}
                    />
                    <Form.Input
                        autoComplete
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange ={({target})=>setPassword(target.value)}
                    />

                    <Form.Submit
                        disabled={isInvalid}
                        type ="submit"
                    >
                        Sign in
                    </Form.Submit>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                    </Form.Text>
                    
                  </Form.Base>
              </Form>
          </HeaderContainer>
          <FooterContainer/></>
    )
}