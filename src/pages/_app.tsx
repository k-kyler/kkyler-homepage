import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from '@/layouts/Layout';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
