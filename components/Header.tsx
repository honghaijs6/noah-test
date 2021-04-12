import React from "react";
import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Text
} from "@chakra-ui/react";



interface HeaderProps { }

const Links = ['Test 1 ', 'Test 2', 'Test 3'];
const NavLink = ({ children }: { children: ReactNode }) => {

  return (
    <Link
      px={4}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  )
}


const Header: React.FC<HeaderProps> = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}

    >
      <Container maxW="container.lg">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          {/* LEFT SIDE */}
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text fontSize="xl" style={{ color:'#319795'}}>Noah Test</Text>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          {/** RIGHT SIDE  */}
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
            >
              Gihub
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/44365604?v=4'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>


        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
