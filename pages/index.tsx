
import React, { createRef, useRef, useState, useContext } from 'react';
import { Box, Input, Stack } from '@chakra-ui/react';

import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebaseSetup';

import Layout from 'components/Layout';

import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

import DynamicText from "components/DynamicText";



const Home = () => {

  const user = useContext(AuthContext);

  const [tab, setTab] = useState('signin');

  const refDisplayText = createRef<HTMLDivElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    refDisplayText.current.innerHTML = e.target.value;
  };


  // FORM SIGN IN CONTROLLER 
  class FormController<HTMLInputElement> {

    refEmail = useRef<HTMLInputElement>(null);
    refPassword = useRef<HTMLInputElement>(null);
    refMsg = useRef<HTMLDivElement>(null);

    refEmailSignUp = useRef<HTMLInputElement>(null);
    refPasswordSignUp = useRef<HTMLInputElement>(null);
    refMsgSignUp = useRef<HTMLDivElement>(null);

    switch = (type) => {
      setTab(type)
    }

    submit = async () => {

      try {
        await auth.signInWithEmailAndPassword(
          this.refEmail.current.value,
          this.refPassword.current.value
        );
      } catch (error) {

        this.refMsg.current.innerHTML = error;
        setTimeout(() => {
          this.refMsg.current.innerHTML = null;
        }, 4000)

      }

    }

    submitSignUp = async () => {


      try {
        await auth.createUserWithEmailAndPassword(
          this.refEmailSignUp.current.value,
          this.refPasswordSignUp.current.value
        );
      } catch (error) {
        this.refMsgSignUp.current.innerHTML = error;
        setTimeout(() => {
          this.refMsgSignUp.current.innerHTML = null;
        }, 4000)
      }

    }
  }
  const formController = new FormController();
  
  return (
    <Layout title="Coding Test">

      {
        user ? (
          <Stack
            maxW={500}
            alignSelf="center"
            alignContent="center"

            style={{ marginLeft: 'auto', marginRight: 'auto' }}

          >
            <DynamicText ref={refDisplayText} />
            <Input size="md" onChange={onChange} />

          </Stack>
        ) : tab === 'signin' ? <SignInForm ref={formController} /> : <SignUpForm ref={formController} />
      }
    
    </Layout>
  );
};

export default Home;
