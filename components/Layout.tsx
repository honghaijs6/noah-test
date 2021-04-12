import React from 'react';
import Head from 'next/head';

import { Container } from '@chakra-ui/react';

import Header from './Header';

interface LayoutPros {
    title: string
}

const Layout: React.FC<LayoutPros> = ({title, children})=>{

    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                
                <Header />
                <Container maxW="container.lg">
                { children }
                </Container>
            </div>
        </>
    )
}

export default Layout;
