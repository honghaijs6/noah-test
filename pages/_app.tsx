
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../context/AuthProvider';


const MyApp = ({ Component, pageProps }) => {

  return (

    <AuthProvider>
      <ChakraProvider>
        <Component {...pageProps} />

      </ChakraProvider>
    </AuthProvider>
  )

};

export default MyApp;
