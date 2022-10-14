import { Stack } from '@chakra-ui/react';
import React from 'react';

import { AnimatedSection } from '@/components';
import { StyledParagraph } from '@/constants/styles';

const Detail: React.FC = () => {
  return (
    <AnimatedSection delay={0.5} title="About">
      <Stack>
        <StyledParagraph>
          {
            "I'm a software engineer with a deep passion in the web development world. I've been diving into it during self-learning, university, and having hands-on experience with both front-end and back-end along with a few side projects. I love learning new technologies, new stuff, or everything that can help me build great products."
          }
        </StyledParagraph>
        <StyledParagraph>
          {
            "My main interest in web development is about making attractive user interfaces and giving end-users awesome experiences, so I mostly like doing the front-end. However, I'm also very interested in doing the back-end stuff, deployment, or other aspects of the software development process."
          }
        </StyledParagraph>
      </Stack>
    </AnimatedSection>
  );
};

export default Detail;
