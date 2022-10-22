import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  bgLight: '#d5dbe5',
  bgDark: '#202023',
  navLight: '#ffffff40',
  navDark: '#20202380',
  darkGrey: '#525252',
  neon: '#ff63c3',
  crystal: '#33ccee',
  crystalDark: '#31accc',
  crystalDarker: '#3093b1',
  crystalGradient:
    'linear-gradient(100deg, transparent 30%, #33ccee, transparent 70%), linear-gradient(90deg, #3093b1, #31accc)',
};

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode('bgLight', 'bgDark')(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      color: mode('crystal', 'neon')(props),
      textUnderlineOffset: 3,
    }),
  },
  Heading: {
    variants: {
      'animated-section-title': {
        fontSize: 20,
        textDecoration: 'underline',
        textUnderlineOffset: 6,
        textDecorationColor: 'darkGrey',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      'section-title': {
        fontSize: 20,
        marginBottom: 4,
      },
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, components, fonts, colors, config });

export default theme;
