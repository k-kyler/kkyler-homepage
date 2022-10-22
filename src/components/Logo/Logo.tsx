import { Heading, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const StyledLetter = styled(Heading)`
  --primary: #33ccee;
  --primary-dark: #31accc;
  --secondary: #3093b1;
  --crystal-gradient: linear-gradient(
      100deg,
      transparent 30%,
      var(--primary),
      transparent 70%
    ),
    linear-gradient(90deg, var(--secondary), var(--primary-dark));

  background-image: var(--crystal-gradient);
  background-repeat: no-repeat;
  background-size: 200% 100%, 100% 100%;
  background-position: 63% 50%, 50% 50%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: appear 0.5s forwards, shining 3s linear infinite;

  @keyframes shining {
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
          <Heading
            as="h1"
            size="lg"
            letterSpacing="tighter"
            marginLeft={'unset'}
          >
            <StyledLetter as="span">k</StyledLetter>
            khai
          </Heading>
        </Stack>
      </a>
    </Link>
  );
};

export default Logo;
