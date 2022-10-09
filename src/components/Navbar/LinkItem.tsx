import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export interface ILinkItem {
  href: string;
  path: string;
  content: React.ReactNode;
}

const LinkItem: React.FC<ILinkItem> = ({ href, path, content }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.500', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <ChakraLink
        p={2}
        color={active ? '#202023' : inactiveColor}
        bg={active ? 'glassTeal' : undefined}
      >
        {content}
      </ChakraLink>
    </NextLink>
  );
};

export default LinkItem;
