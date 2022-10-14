import { Container } from '@chakra-ui/react';

import { Detail, Hero, Intro } from '@/components';

const Index = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <Detail />
    </Container>
  );
};

export default Index;
