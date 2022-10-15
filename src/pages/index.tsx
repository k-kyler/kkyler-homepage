import { Container } from '@chakra-ui/react';

import { About, Bio, Hero, Intro } from '@/components';

const Index = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <About />
      <Bio />
    </Container>
  );
};

export default Index;
