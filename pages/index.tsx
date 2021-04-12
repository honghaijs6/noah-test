
import React, { createRef, } from 'react';
import { Box, Input, Stack } from '@chakra-ui/react';
import Layout from '../components/Layout';


import DynamicText from "../components/DynamicText";


const Home = () => {

  const refDisplayText = createRef<HTMLDivElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    refDisplayText.current.innerHTML = e.target.value;
  };


  return (
    <Layout title="Coding Test">

        <Stack 
          maxW={500}
          alignSelf="center"
          alignContent="center"

          style={{ marginLeft:'auto', marginRight:'auto'}}
          
        >
          <DynamicText ref={refDisplayText} />
          <Input size="md" onChange={onChange} />
          
        </Stack>
      
    </Layout>
  );
};

export default Home;
