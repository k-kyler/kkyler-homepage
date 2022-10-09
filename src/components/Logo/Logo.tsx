import { Box, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 30px;

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover img {
    transform: translateY(-3px);
  }
`;

const Logo = () => {
  const logoPath = `/assets/images/kyler-logo${useColorModeValue(
    '-light',
    '-dark'
  )}.png`;

  return (
    <Link href="/">
      <a>
        <LogoContainer>
          <Image src={logoPath} width={210} height={210} alt="kkyler" />
        </LogoContainer>
      </a>
    </Link>
  );
};

export default Logo;
