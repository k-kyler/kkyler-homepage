import { Container } from '@chakra-ui/react';

import { About, Hero, Intro } from '@/components';

const Index = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <About />
    </Container>
  );
};

export default Index;
