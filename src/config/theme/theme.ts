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
  neonPurple: '#ff63c3',
  neonGreen: '#2CC5BD',
  blueGray: {
    0: '#F8F9FC',
    50: '#F4F6FB',
    100: '#E9EDF6',
    200: '#D5DBEE',
    300: '#ADB4CD',
    400: '#7D839B',
    500: '#424659',
    600: '#30344C',
    700: '#212540',
    80: '#151833',
    900: '#0C0F2A',
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
  darkCrystalGradient:
    'linear-gradient(100deg, transparent 30%, #5ac2e4, transparent 70%), linear-gradient(90deg, #30344C, #212540)',
  darkJadeGradient:
    'linear-gradient(100deg, transparent 30%, #5BDCCA, transparent 70%), linear-gradient(90deg, #30344C, #212540)',
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
      color: mode('neonGreen', 'neonPurple')(props),
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
      'social-item': {
        fontSize: 14,
        marginBottom: 4,
        color: mode('jade.200', 'blueGray.200'),
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
