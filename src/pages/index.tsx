import { Container } from '@chakra-ui/react';

import { Bio, Interest, Intro, Message, Story } from '@/components';

const Index = () => {
  return (
    <Container>
      <Message />
      <Intro />
      <Story />
      <Bio />
      <Interest />
    </Container>
  );
};

export default Index;
