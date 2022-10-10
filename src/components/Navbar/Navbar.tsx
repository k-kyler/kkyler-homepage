import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React, { useMemo } from 'react';

import { Logo, ThemeToggleButton } from '@/components';

import type { ILinkItem } from './LinkItem';
import LinkItem from './LinkItem';

interface INavbar {
  path: string;
}

const StyledNavbar = styled(Box)`
  backdrop-filter: blur(10px);
`;

const Navbar: React.FC<INavbar> = ({ path, ...rest }) => {
  const linkItems: Omit<ILinkItem, 'path'>[] = useMemo(() => {
    return [
      { content: 'Social', href: '/social' },
      { content: 'Works', href: '/works' },
      { content: 'Blog', href: '/blog' },
    ];
  }, []);

  return (
    <StyledNavbar
      as="nav"
      position="fixed"
      zIndex={1}
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      {...rest}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        p={2}
        maxW="container.md"
      >
        <Stack direction="row" align="center">
          <Logo />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            width={{ base: 'full', md: 'auto' }}
          >
            {linkItems?.map(({ href, content }) => (
              <LinkItem key={href} href={href} path={path} content={content} />
            ))}
          </Stack>
        </Stack>

        <Stack direction="row" align="center" columnGap={2}>
          <ThemeToggleButton />

          <Stack display={{ base: 'flex', md: 'none' }}>
            <Menu>
              <MenuButton
                aria-label="Menu"
                variant="outline"
                as={IconButton}
                icon={<HamburgerIcon />}
              />
              <MenuList>
                {linkItems?.map(({ href, content }) => (
                  <NextLink key={href} href={href} passHref>
                    <MenuItem as={ChakraLink}>{content}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
