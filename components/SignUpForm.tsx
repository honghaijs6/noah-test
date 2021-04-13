
import React from 'react';
import {
    Box,
    Button,

    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,

} from '@chakra-ui/react';

const SignInForm = React.forwardRef<HTMLInputElement>((props, refController)=>{
    return (
        <Stack spacing={4} w={'full'} maxW={'md'} mt={20}>

            <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'} 
            >
                <Heading fontSize={'2xl'}>Creat Account</Heading>
                <Link onClick={()=>{ refController.switch('signin') }} color={'blue.500'}>Sign In</Link>
            </Stack>


            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={ refController.refEmailSignUp} type="email" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={ refController.refPasswordSignUp} type="password" /> 
            </FormControl>
            <Stack pt={30}>

                <Button onClick={ refController.submitSignUp } colorScheme={'blue'} variant={'solid'}>
                Create Account
                </Button>
            </Stack>
            <Box color={'red.500'} 
                ref={ refController.refMsgSignUp }
            ></Box>
        </Stack>
    )
})

export default SignInForm;