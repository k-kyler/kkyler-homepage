import { Box, Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';

import { Navbar } from '@/components';
import { Meta } from '@/layouts';

type ILayout = {
  children: React.ReactNode;
} & Pick<AppProps, 'router'>;

const Layout: React.FC<ILayout> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Meta
        title="Khai Bui (kkyler) - Homepage"
        description="My awesome site"
      />
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
