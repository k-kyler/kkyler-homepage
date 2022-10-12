import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Box
      p={3}
      my={6}
      textAlign="center"
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      {"What's up. I'm Khai - a software engineer based in Vietnam 🍺"}
    </Box>
  );
};

export default Hero;
