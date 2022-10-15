import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Theme toggle button"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue('purple', 'orange')}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;
