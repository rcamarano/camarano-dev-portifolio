// import { useRef } from 'react';
import Header from '../components/Header';
import projectsData from '../components/utils/projectsData';
import ProjectsCard from '../components/ProjectsCard';
import AboutMe from '../components/About';
import Image from 'next/image';
import { Container, Row, Col } from 'react-grid-system';

export default function Gallery({ data }) {
  const scrollHandler = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
        <Image
          src="/images/stacks.svg"
          alt="Banner"
          layout="responsive"
          width={400}
          height={100}
        />
      </div>

      <Container className="container-centered">
        <Row>
          <Col className="row-centered">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-700 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Latest projects!
            </p>
          </Col>
        </Row>
        <Row>
          {projectsData.map((project) => (
            <Col key={project.id} className="project-column" sm={4}>
              <ProjectsCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
      <div id="about-section" className="about-me-section">
        <AboutMe  scrollHandler={scrollHandler}/>
      </div>
    </>
  );
}
