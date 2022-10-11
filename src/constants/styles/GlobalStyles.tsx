import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap');`}
    />
  );
};

export default GlobalStyles;
