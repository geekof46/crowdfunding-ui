import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectGrid({ action }) {
  return (<>  <Row xs={12} md={4} className="g-3">
    {Array.from({ length: 12 }).map((_, idx) => (
      <Col key={idx}>
        <ProjectCard action={action}>
        </ProjectCard>
      </Col>
    ))}
  </Row>
  </>

  );
}

export default ProjectGrid;