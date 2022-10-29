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
import isEmpty from 'lodash/isEmpty';
import NextLink from 'next/link';
import React from 'react';

import { Logo, ThemeToggleButton } from '@/components';
import { Paths } from '@/constants';

import LinkItem from './LinkItem';

interface INavbar {
  path: string;
}

const Navbar: React.FC<INavbar> = ({ path, ...rest }) => {
  const linkItems = Object.keys(Paths)?.map((pathName) => ({
    content: pathName,
    // @ts-ignore
    href: !isEmpty(Paths) ? Paths[pathName] : '/',
  }));

  return (
    <Box
      as="nav"
      position="fixed"
      zIndex={1}
      w="100%"
      backdropFilter="blur(10px)"
      bg={useColorModeValue('navLight', 'navDark')}
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
        {/* Desktop menu */}
        <Stack direction="row" align="center" columnGap={5}>
          <Logo />
          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
            width={{ base: 'full', md: 'auto' }}
          >
            {linkItems?.map(({ href, content }) => (
              <LinkItem key={href} href={href} path={path} content={content} />
            ))}
          </Stack>
        </Stack>

        {/* Mobile menu */}
        <Stack direction="row" align="center">
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
    </Box>
  );
};

export default Navbar;
