import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoContainer = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;

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
      <LogoContainer>
        <Image src={logoPath} width={220} height={220} alt="kkyler" />
      </LogoContainer>
    </Link>
  );
};

export default Logo;
