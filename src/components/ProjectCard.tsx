import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Project } from '../model/Project'
import { UserRole } from '../model/UserRole'
import XModal from './XModal';
import DonationForm from './DonationForm'

export interface ProjectCardProps {
  readonly imageUrl: string;
  readonly userRole: UserRole;
  readonly projectDetails: Project;
}


/**
 * TODO refactor this to remove conditions and pass them as children prop
 * @param props 
 * @returns 
 */
function ProjectCard(props: ProjectCardProps) {

  return (
    <>
      <Card style={{ margin: '20px' }} >
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.projectDetails.name}</Card.Title>
          {
            (props.projectDetails.status != "ARCHIVED")
            && <ProgressBar style={{ backgroundColor: 'black' }} animated variant="info" label={
              props.projectDetails.receivedDonationAmount + "/" + props.projectDetails.requestedAmount
            }
              now={props.projectDetails.receivedDonationAmount / props.projectDetails.requestedAmount * 100} />
          }
          {/* <Card.Body>
            <Card.Text>{props.projectDetails.description.substring(0, 30)}...</Card.Text>
          </Card.Body> */}
          <Card.Footer>

            {
              props.projectDetails.status == "ARCHIVED" &&
              <>
                <Card.Text>Donation Received : {props.projectDetails.receivedDonationAmount} $</Card.Text>
              </>
            }

            {
              props.userRole == UserRole.DONOR &&
              <>
                <Row>
                  <Col xs={1}>
                  </Col>
                  <Col xs={10}>
                    <XModal title="Project" variant="primary" action="Donate">
                      <DonationForm projectId={props.projectDetails.projectId}></DonationForm>
                    </XModal>
                  </Col>
                </Row>
              </>
            }
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;