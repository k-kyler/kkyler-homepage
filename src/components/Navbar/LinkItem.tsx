import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export interface ILinkItem {
  href: string;
  path: string;
  content: React.ReactNode;
}

const LinkItem: React.FC<ILinkItem> = ({ href, path, content }) => {
  const active = path === href;
  const activeBackgroundColor = useColorModeValue('blueGray.500', 'jade.200');
  const activeColor = useColorModeValue('white', 'black');
  const inactiveColor = useColorModeValue('gray.500', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <ChakraLink
        p={2}
        borderRadius="md"
        color={active ? activeColor : inactiveColor}
        bg={active ? activeBackgroundColor : undefined}
      >
        {content}
      </ChakraLink>
    </NextLink>
  );
};

export default LinkItem;
