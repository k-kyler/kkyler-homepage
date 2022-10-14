import { Box, chakra, Heading, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

interface IAnimatedSection {
  title: React.ReactNode;
  children: React.ReactNode;
  delay: number;
}

const StyledContainer = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'transition',
});

const AnimatedSection: React.FC<IAnimatedSection> = ({
  title,
  children,
  delay = 0,
}) => {
  return (
    <StyledContainer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition="ease-in-out"
      transitionDelay={delay?.toString()}
      mb={6}
    >
      <Heading as="h3" variant="animated-section-title">
        {title}
      </Heading>
      <Box>{children}</Box>
    </StyledContainer>
  );
};

export default AnimatedSection;
