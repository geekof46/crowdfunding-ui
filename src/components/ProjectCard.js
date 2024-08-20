import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import XModal from './XModal';
import Form from 'react-bootstrap/Form';

function ProjectCard(props) {
  return (
    <>
      <Card style={{ margin: '20px' }} >
        <Card.Img variant="top" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
          {
            props.action === "Donate" &&
            <XModal title="Donation" variant="primary" action="Donate">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Donation Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="amount in $"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Word of Support</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </XModal>
          }
          {
            props.action === "Request" &&
            <Button variant="primary">Request for Donation</Button>
          }

        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;