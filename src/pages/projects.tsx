import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import { AnimatedSection, ProjectItem } from '@/components';
import type { IProjectItem } from '@/components/ProjectItem';

const Projects = () => {
  const projectsData: IProjectItem[] = [
    {
      id: 'minizalo',
      title: 'Minizalo',
      description: 'Web chat inspired by Zalo and Facebook',
      thumbnail:
        'https://res.cloudinary.com/dln0u19lm/image/upload/v1690392778/My%20portfolio/minizalo.jpg',
    },
    {
      id: 'tdtu-social-network',
      title: 'TDTU Social Network',
      description:
        'A place for the students and teachers of Ton Duc Thang University (TDTU) can communicate with each other',
      thumbnail:
        'https://res.cloudinary.com/dln0u19lm/image/upload/v1690395803/My%20portfolio/tdtu-social-network.jpg',
    },
    {
      id: 'video-meeting-app',
      title: 'Video Meeting App',
      description:
        'Implement PeerJS & Socket.io for creating a real-time video meeting application',
      thumbnail:
        'https://res.cloudinary.com/dln0u19lm/image/upload/v1690394997/My%20portfolio/video-meeting-app.jpg',
    },
    {
      id: 'covid19-tracker',
      title: 'Covid-19 Tracker',
      description:
        'Worldwide Covid-19 tracker web application with visual graphs built with Coronavirus Map API',
      thumbnail:
        'https://res.cloudinary.com/dln0u19lm/image/upload/v1690395161/My%20portfolio/covid19-tracker_fdidd7.gif',
    },
    {
      id: 'shopping-cart',
      title: 'Shopping Cart',
      description:
        'A shopping cart demo with product features and payment process developed by Commerce.js and Stripe',
      thumbnail:
        'https://res.cloudinary.com/dln0u19lm/image/upload/v1690393485/My%20portfolio/shoppiness.jpg',
    },
  ];

  return (
    <Container>
      <Heading as="h3" variant="section-title" mt={6}>
        Side Projects
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
