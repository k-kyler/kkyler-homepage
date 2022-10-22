import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { Paths } from '@/constants';

export interface IProjectItem {
  id: string;
  title: string;
  description: React.ReactNode;
  thumbnail: string;
}

const ProjectItem: React.FC<IProjectItem> = ({
  id,
  title,
  description,
  thumbnail,
}) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`${Paths.Projects}${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            borderRadius="md"
          />

          <LinkOverlay href={`${Paths.Projects}${id}`}>
            <Text mt={4} mb={1} fontSize={20} fontWeight={500}>
              {title}
            </Text>
          </LinkOverlay>

          <Text fontSize={14}>{description}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export default ProjectItem;
