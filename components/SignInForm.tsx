
import React from 'react';
import {
    Button,

    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,

} from '@chakra-ui/react';

interface SignInFormProps {
    title: string
}

const SignInForm: React.FC<SignInFormProps> = ({ title }) => {

    return (
        <Stack spacing={4} w={'full'} maxW={'md'} mt={20}>

            <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
            >
                <Heading fontSize={'2xl'}>{title}</Heading>
                <Link color={'blue.500'}>Sign Up</Link>
            </Stack>


            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Stack pt={30}>

                <Button colorScheme={'blue'} variant={'solid'}>
                { title }
                </Button>
            </Stack>
        </Stack>
    )
}

export default SignInForm;