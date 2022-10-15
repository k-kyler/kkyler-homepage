import { Container } from '@chakra-ui/react';

import { About, Bio, Hero, Interest, Intro } from '@/components';

const Index = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <About />
      <Bio />
      <Interest />
    </Container>
  );
};

export default Index;
