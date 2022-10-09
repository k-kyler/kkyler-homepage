import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useMemo } from 'react';

import { Logo } from '../Logo';
import type { ILinkItem } from './LinkItem';
import LinkItem from './LinkItem';

interface INavbar {
  path: string;
}

const Navbar: React.FC<INavbar> = ({ path, ...rest }) => {
  const linkItems: Omit<ILinkItem, 'path'>[] = useMemo(() => {
    return [
      { children: 'Social', href: '/social' },
      { children: 'Works', href: '/works' },
      { children: 'Blog', href: '/blog' },
    ];
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
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
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          width={{ base: 'full', md: 'auto' }}
        >
          {linkItems?.map((item) => (
            <LinkItem key={item?.href} path={path} {...item} />
          ))}
        </Stack>

        <Box flex={1}>
          <Box
            ml={2}
            display={{ base: 'flex', md: 'none' }}
            justifyContent="flex-end"
          >
            <Menu>
              <MenuButton
                aria-label="Menu"
                variant="outlined"
                as={IconButton}
                icon={<HamburgerIcon />}
              />
              <MenuList>
                {linkItems?.map((item) => (
                  <NextLink key={item.href} href={item.href} passHref>
                    <MenuItem as={ChakraLink}>{item.children}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
