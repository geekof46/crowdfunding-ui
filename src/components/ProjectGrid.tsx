import ProjectCard from './ProjectCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ReactNode } from 'react';
import { Project } from '../model/Project'
import { UserRole } from '../model/UserRole';


interface ProjectGridProps {
  readonly children: ReactNode;
  readonly action: string;
  readonly userRole: UserRole;
  readonly data: Project[]; //TODO add interface for project details 
}

function ProjectGrid(props: ProjectGridProps) {
  return (<>  <Row xs={12} md={3} className="g-3">

    {props.data.map(item => {
      return <Col key={item.projectId}>
        <ProjectCard
          projectDetails={item}
          userRole={props.userRole}
          imageUrl="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
        >
        </ProjectCard>
      </Col>
    })}
  </Row>
  </>

  );
}

export default ProjectGrid;