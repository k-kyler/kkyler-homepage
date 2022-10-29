import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  bgLight: '#F1F4FE',
  bgDark: '#202023',
  navLight: '#ffffff40',
  navDark: '#20202380',
  darkGrey: '#525252',
  neon: '#ff63c3',
  crystal: {
    0: '#F1F4FE',
    50: '#E6ECFE',
    100: '#D4DBFC',
    200: '#A9B8FA',
    300: '#7C90F1',
    400: '#5A6FE4',
    500: '#2940D3',
    600: '#1D30B5',
    700: '#142297',
    800: '#0D177A',
    900: '#070F65',
  },
  jade: {
    0: '#F5FEFB',
    50: '#ECFEF7',
    100: '#D4FCEC',
    200: '#ABF9E0',
    300: '#7EEDD4',
    400: '#5BDCCA',
    500: '#2CC5BD',
    600: '#20A4A9',
    700: '#167E8D',
    800: '#0E5C72',
    900: '#08445E',
  },
  crystalGradient:
    'linear-gradient(100deg, transparent 30%, #5A6FE4, transparent 70%), linear-gradient(90deg, #1D30B5, #142297)',
  jadeGradient:
    'linear-gradient(100deg, transparent 30%, #20A4A9, transparent 70%), linear-gradient(90deg, #167E8D, #0E5C72)',
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
      color: mode('crystal.500', 'neon')(props),
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
