
import React, { createRef, useState } from 'react';
import { Box, Input, Stack } from '@chakra-ui/react';

import { AuthContext } from '../context/AuthContext';
import Layout from 'components/Layout';

import SignInForm from 'components/SignInForm';

import DynamicText from "components/DynamicText";


const Home = () => {

  const [tab, setTab] = useState('signin');

  const refDisplayText = createRef<HTMLDivElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    refDisplayText.current.innerHTML = e.target.value;
  };


  return (
    <Layout title="Coding Test">

        { tab === 'signin' ?  <SignInForm title="Sign In"  /> : null }

        
        {/*<Stack 
          maxW={500}
          alignSelf="center"
          alignContent="center"

          style={{ marginLeft:'auto', marginRight:'auto'}}
          
        >
          <DynamicText ref={refDisplayText} />
          <Input size="md" onChange={onChange} />
          
        </Stack>*/}
      
    </Layout>
  );
};

export default Home;
