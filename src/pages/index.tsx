import { Container } from '@chakra-ui/react';

import { Bio, Interest, Intro, Message, Social, Story } from '@/components';

const Index = () => {
  return (
    <Container>
      <Message />
      <Intro />
      <Story />
      <Bio />
      <Interest />
      <Social />
    </Container>
  );
};

export default Index;
