import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import { AnimatedSection, ProjectItem } from '@/components';
import type { IProjectItem } from '@/components/ProjectItem';

const Projects = () => {
  const projectsData: IProjectItem[] = [
    {
      id: 'minizalo',
      title: 'Minizalo',
      description: 'Simple web chat inspired by Zalo and Facebook',
      thumbnail:
        'https://res.cloudinary.com/dvfpdutzf/image/upload/v1666428641/portfolio/minizalo_mzvghd.jpg',
    },
    {
      id: 'tdtu-social-network',
      title: 'TDTU Social Network',
      description:
        'The social network for Ton Duc Thang University (TDTU), a place for students and university can communicate with each other.',
      thumbnail:
        'https://res.cloudinary.com/dvfpdutzf/image/upload/v1666428532/portfolio/tdtu-social-network_jaovyi.jpg',
    },
    {
      id: 'video-meeting-app',
      title: 'Video Meeting App',
      description:
        'Implement PeerJS & Socket.io for creating a real-time video meeting application.',
      thumbnail:
        'https://res.cloudinary.com/dvfpdutzf/image/upload/v1666429477/portfolio/video-meeting-app_hr1teh.jpg',
    },
  ];

  return (
    <Container>
      <Heading as="h3" variant="section-title">
        Projects
      </Heading>

      <SimpleGrid gap={6} columns={[1, 1, 2]}>
        {projectsData.map((project) => (
          <AnimatedSection key={project.id}>
            <ProjectItem {...project} />
          </AnimatedSection>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
