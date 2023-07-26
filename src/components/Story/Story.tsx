import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React from 'react';

import { AnimatedSection } from '@/components';
import { Paths } from '@/constants';

const StyledParagraph = styled.p`
  text-indent: 1em;
  text-align: justify;
`;

const Story: React.FC = () => {
  const storyData: { paragraph: React.ReactNode }[] = [
    {
      paragraph:
        "Hi! I'm a developer with a deep passion in web development world, I've been diving into it during self-learning, university, work and having hands-on experience with both front-end and back-end along with a few side projects. I love learning new technologies, new stuff or everything that can help me make great web apps.",
    },
    {
      paragraph:
        "My big interest in web development is about making attractive user interface and giving end-user awesome experience, so I mostly like doing the front-end. However, I'm also willing to learn more and taking part in different aspects of the software development.",
    },
    {
      paragraph: (
        <>
          {"Currently, I'm working as a front-end engineer at "}
          <ChakraLink href="https://oven.vn" target="_blank" fontWeight="500">
            OVEN
          </ChakraLink>
          {' - A startup Japanese software agency based in Vietnam.'}
        </>
      ),
    },
  ];

  return (
    <AnimatedSection delay={0.1} title="Story">
      <Stack>
        {storyData?.map(({ paragraph }) => (
          <StyledParagraph key={paragraph?.toString()}>
            {paragraph}
          </StyledParagraph>
        ))}
        <Box alignSelf="center" pt={2}>
          <NextLink href={Paths.Projects}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue('blueGray', 'jade')}
            >
              My works
            </Button>
          </NextLink>
        </Box>
      </Stack>
    </AnimatedSection>
  );
};

export default Story;
