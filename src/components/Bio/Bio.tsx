import { Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

import { AnimatedSection } from '@/components';

interface IBioItem {
  timeline: React.ReactNode;
  content: React.ReactNode;
}

const BioYear = styled.span`
  font-weight: bold;
`;

const BioItem: React.FC<IBioItem> = ({ timeline, content }) => {
  return (
    <Stack direction="row" gap={2}>
      <BioYear>{timeline}</BioYear>
      <p>{content}</p>
    </Stack>
  );
};

const Bio: React.FC = () => {
  const bioData: IBioItem[] = [
    {
      timeline: '2022',
      content:
        'Completed the Bachelor of Engineering in Software Engineering program at Ton Duc Thang university, Vietnam.',
    },
    {
      timeline: '2022 - Present',
      content: 'Working as a front-end engineer at OVEN.',
    },
  ];

  return (
    <AnimatedSection title="Bio" delay={0.3}>
      <Stack>
        {bioData?.map((data) => (
          <BioItem key={data?.content?.toString()} {...data} />
        ))}
      </Stack>
    </AnimatedSection>
  );
};

export default Bio;
