import { Box, Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';

import { Navbar } from '@/components';
import { Meta } from '@/layouts';
import { AppConfig } from '@/utils/AppConfig';

type ILayout = {
  children: React.ReactNode;
} & Pick<AppProps, 'router'>;

const Layout: React.FC<ILayout> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Meta
        title={AppConfig.title}
        description={AppConfig.description}
        canonical={AppConfig.canonical}
      />
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
