import React from 'react';

import { AnimatedSection } from '../AnimatedSection';

const Interest: React.FC = () => {
  return (
    <AnimatedSection title="I love" delay={0.7}>
      <p>Web development, tech stuff, music, coffee and 🍺.</p>
    </AnimatedSection>
  );
};

export default Interest;
