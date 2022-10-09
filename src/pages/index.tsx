import { Box, Container, Heading } from '@chakra-ui/react';

const Index = () => {
  return (
    <Container>
      <Box bg="gray" p={3} mb={6} textAlign="center" borderRadius="lg">
        {"Great to see you here. I'm a software engineer based in Vietnam 🍺"}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="title-name">
            Khai Bui
          </Heading>
          <p>Software Engineer (Front-end / Back-end / Mobile)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
