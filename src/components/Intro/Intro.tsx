import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const Intro: React.FC = () => {
  const selfInfo = {
    name: 'Khai Bui',
    description: 'Software Engineer (Front-end / Back-end / Mobile)',
    avatar:
      'https://res.cloudinary.com/dvfpdutzf/image/upload/v1665593028/portfolio/khaibui_zbanoo.jpg',
  };

  return (
    <Stack direction={{ base: 'column', md: 'row' }} alignItems="center">
      <Box flexGrow={1}>
        <Heading as="h2">{selfInfo.name}</Heading>
        <p>{selfInfo.description}</p>
      </Box>

      <Stack
        alignItems="center"
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: 6 }}
      >
        <Image
          src={selfInfo.avatar}
          alt={selfInfo.name}
          border="2px solid #fff"
          borderRadius="full"
          maxWidth="96px"
        />
      </Stack>
    </Stack>
  );
};

export default Intro;
