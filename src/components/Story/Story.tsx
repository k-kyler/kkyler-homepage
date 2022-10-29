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
        "I'm a software engineer with a deep passion in the web development world. I've been diving into it during self-learning, university, and having hands-on experience with both front-end and back-end along with a few side projects. I love learning new technologies, new stuff, or everything that can help me build great products.",
    },
    {
      paragraph:
        "My main interest in software development is about making attractive user interfaces and giving end-users great experiences, so I mostly like doing the front-end. However, I'm also very interested in doing the back-end, mobile, or any aspects of the software development process.",
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
              colorScheme={useColorModeValue('crystal', 'jade')}
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
