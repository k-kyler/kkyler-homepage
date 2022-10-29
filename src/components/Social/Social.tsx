import { Link as ChakraLink, Stack } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

import { AnimatedSection } from '../AnimatedSection';

interface ISocialItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const SocialItem: React.FC<ISocialItem> = ({ icon, text, href }) => {
  return (
    <ChakraLink
      href={href}
      target="_blank"
      fontWeight="500"
      display="flex"
      alignItems="center"
      gap={2}
      w="fit-content"
    >
      {icon}
      {text}
    </ChakraLink>
  );
};

const Social: React.FC = () => {
  return (
    <AnimatedSection title="How to reach me" delay={0.9}>
      <Stack gap={1}>
        <SocialItem
          icon={<FaGithub />}
          text="GitHub"
          href="https://github.com/k-kyler"
        />
        <SocialItem
          icon={<FaLinkedin />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/imkhai/"
        />
        <SocialItem
          icon={<FaFacebookSquare />}
          text="Facebook"
          href="https://www.facebook.com/quangkhai.005/"
        />
      </Stack>
    </AnimatedSection>
  );
};

export default Social;
