import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode('#e0e6ef', '#202023')(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      color: mode('#31accc', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
  Heading: {
    variants: {
      'animated-section-title': {
        fontSize: 20,
        textDecoration: 'underline',
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
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

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  crystal: '#31accc',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, components, fonts, colors, config });

export default theme;
