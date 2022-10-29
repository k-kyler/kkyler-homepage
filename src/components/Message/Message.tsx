import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Message: React.FC = () => {
  return (
    <Box
      p={3}
      my={6}
      textAlign="center"
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
      boxShadow="rgba(0, 0, 0, 0.04) 0px 3px 5px"
    >
      {"Thanks for reaching out. I'm Khai!"}
    </Box>
  );
};

export default Message;
