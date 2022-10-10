import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { theme } from '@/config/theme';
import Layout from '@/layouts/Layout/Layout';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
