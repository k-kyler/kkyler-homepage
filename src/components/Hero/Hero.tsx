import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <Box
      p={3}
      my={6}
      textAlign="center"
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      {"Thanks for reaching out. I'm Khai!"}
    </Box>
  );
};

export default Hero;
