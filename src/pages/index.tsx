import { Container } from '@chakra-ui/react';

import { Bio, Hero, Interest, Intro, Story } from '@/components';

const Index = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <Story />
      <Bio />
      <Interest />
    </Container>
  );
};

export default Index;
