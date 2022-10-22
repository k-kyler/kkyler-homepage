import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

const blog = () => {
  return (
    <Container>
      <Heading
        as="h3"
        variant="section-title"
        // TODO: May remove this margin top when the 3D animated section be added
        mt={6}
      >
        My Blog 😎
      </Heading>

      <p>Update soon...</p>
    </Container>
  );
};

export default blog;
