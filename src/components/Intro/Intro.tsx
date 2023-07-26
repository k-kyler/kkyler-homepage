import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const Intro: React.FC = () => {
  const selfInfo = {
    name: 'Khai Bui',
    description: 'Software Engineer (Front-end / Back-end / Mobile)',
    avatar:
      'https://res.cloudinary.com/dln0u19lm/image/upload/v1690397455/My%20portfolio/kb.jpg',
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
          width="96px"
          height="96px"
          objectFit="cover"
        />
      </Stack>
    </Stack>
  );
};

export default Intro;
