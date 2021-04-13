
import React, { useState } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
    Heading,
    Text,
    useColorModeValue,
    Image

} from "@chakra-ui/react";

interface ModalDetailContent {
    isOpen: boolean;
    info: {
        tilte: '',
        content: '',
        photo: ''
    };
    onClose: () => {}

}

const ModalDetailContent: React.FC<ModalDetailContent> = ({ isOpen, info, onClose }) => {


    return (
        <>

            <Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{info.tilte}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={5}>

                      

                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{ base: '3', sm: '0' }}>

                            <Heading marginTop="1">
                                {info.title}
                            </Heading>
                            <Image
                                    pt={'15px'}
                                    pb={'15px'}
                                    src={info.photo}
                                  
                                />
                            <Text
                                as="p"
                                marginTop="2"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                {info.content}
                            </Text>

                        </Box>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )

}

export default ModalDetailContent;