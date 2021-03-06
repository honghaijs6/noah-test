
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
                <Heading fontSize={'2xl'}>Sign In</Heading>
                <Link onClick={()=>{ refController.switch('signup') }} color={'blue.500'}>Create Account</Link>
            </Stack>


            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={ refController.refEmail} type="email" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={ refController.refPassword} type="password" /> 
            </FormControl>
            <Stack pt={30}>

                <Button onClick={ refController.submit } colorScheme={'blue'} variant={'solid'}>
                Sign In
                </Button>
            </Stack>
            <Box color={'red.500'} 
                ref={ refController.refMsg }
            ></Box>
        </Stack>
    )
})

export default SignInForm;