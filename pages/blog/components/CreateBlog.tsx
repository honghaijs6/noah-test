
import React, { useState } from 'react';
import {
    Box,
    Button,

    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Textarea,
    SimpleGrid,
    Flex,

    Image

} from '@chakra-ui/react';

const CreateBlog = React.forwardRef<HTMLInputElement>((props, refController) => {

    const [urlPhoto, setUrlPhoto] = useState(null);

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={10}>

            <Stack spacing={4} w={'full'} maxW={'md'} >

                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                >
                    <Heading fontSize={'2xl'}>Create Blog</Heading>

                </Stack>


                <FormControl id="title">
                    <FormLabel>Title</FormLabel>
                    <Input type="text" placeholder="your article" ref={refController.title} />
                </FormControl>
                <FormControl id="photo">
                    <FormLabel>URL Photo</FormLabel>
                    <Input onChange={(e) => {
                        setUrlPhoto(e.target.value)
                    }} type="text" placeholder="Your URL Photo" ref={refController.photo} />
                </FormControl>
                <FormControl id="content">
                    <FormLabel>Content</FormLabel>
                    <Textarea ref={refController.content} placeholder="Content go here" />
                </FormControl>
                <Stack pt={30}>

                    <Button onClick={refController.submit} colorScheme={'blue'} variant={'solid'}>
                        Submit
                </Button>
                </Stack>
                <Box color={'red.500'}
                    ref={refController.msg}
                ></Box>
            </Stack>

            <Stack spacing={0} align={'center'} mb={5}>
                <Flex width={300} justifyContent="center" alignItems="center" height={300} style={{ border: '1px dashed rgba(1,1,1,0.1)' }}>
                    {urlPhoto !== null ? (
                        <Image
                            borderRadius="lg"
                            src={urlPhoto}
                            objectFit="contain"
                        />
                    ) : null}
                </Flex>
            </Stack>


        </SimpleGrid>
    )
})

export default CreateBlog;