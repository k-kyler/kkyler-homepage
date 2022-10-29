import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const StyledLetter = styled(Heading)`
  background-repeat: no-repeat;
  background-size: 200% 100%, 100% 100%;
  background-position: 50% 50%, 50% 50%;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;

  animation: appear 0.5s forwards, shinny 3s linear infinite;

  @keyframes shinny {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a>
        <Stack direction="row" alignItems="center">
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <StyledLetter
              as="span"
              bg={useColorModeValue('crystalGradient', 'jadeGradient')}
            >
              k
            </StyledLetter>
            hai
          </Heading>
        </Stack>
      </a>
    </Link>
  );
};

export default Logo;
