import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Link as ChakraLink, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { AnimatedSection } from '@/components';
import { Paths, StyledParagraph } from '@/constants';

const About: React.FC = () => {
  return (
    <AnimatedSection delay={0.3} title="About">
      <Stack>
        <StyledParagraph>
          {
            "I'm a software engineer with a deep passion in the web development world. I've been diving into it during self-learning, university, and having hands-on experience with both front-end and back-end along with a few side projects. I love learning new technologies, new stuff, or everything that can help me build great products."
          }
        </StyledParagraph>

        <StyledParagraph>
          {
            "My main interest in software development is about making attractive user interfaces and giving end-users great experiences, so I mostly like doing the front-end. However, I'm also very interested in doing the back-end, mobile, or any aspects of the software development process."
          }
        </StyledParagraph>

        <StyledParagraph>
          {"Currently, I'm working as a front-end engineer at "}
          <ChakraLink href="https://oven.vn" target="_blank">
            OVEN
          </ChakraLink>
          {
            ' - a young and continue growing Japanese software agency based in Vietnam.'
          }
        </StyledParagraph>

        <Box alignSelf="center" py={4}>
          <NextLink href={Paths.Projects}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Stack>
    </AnimatedSection>
  );
};

export default About;
