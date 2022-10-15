import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const Intro: React.FC = () => {
  return (
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2">Khai Bui</Heading>
        <p>Software Engineer (Front-end / Back-end / Mobile)</p>
      </Box>
      <Box
        flexShrink={0}
        alignSelf="center"
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: 6 }}
      >
        <Image
          src={
            'https://res.cloudinary.com/dvfpdutzf/image/upload/v1665593028/portfolio/khaibui_zbanoo.jpg'
          }
          alt="Khai Bui"
          borderWidth={2}
          borderStyle="solid"
          borderRadius="full"
          borderColor="whiteAlpha.800"
          maxWidth="96px"
        />
      </Box>
    </Box>
  );
};

export default Intro;
