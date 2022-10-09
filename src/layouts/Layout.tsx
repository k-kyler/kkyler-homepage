import { Box, Container } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';

import { Meta } from './Meta';

type ILayout = {
  children: React.ReactNode;
} & Pick<AppProps, 'router'>;

const Layout: React.FC<ILayout> = ({
  children,
  // router
}) => {
  return (
    <Box as="main" pb={8}>
      <Meta title="kkyler homepage" description="My personal portfolio" />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
