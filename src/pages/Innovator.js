
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectGrid from '../components/ProjectGrid'
import XModal from '../components/XModal'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Innovator() {
    return <>
        <Row>
        <Col xs={9}>
        </Col>
        <Col xs={3}>
        <XModal title="Project" variant="primary" action="Create">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="project name"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Expected Funding</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Funding Amount in $</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="project name"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </XModal>
        </Col>
      </Row>
    
        <Tabs
            defaultActiveKey="Created"
            id="tabs-for-innovators"
            className="mb-3"
            style={{ margin: '20px' }}
        >
            <Tab eventKey="Created" title="Created">
            <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
        </InputGroup>
                <ProjectGrid action="Request"></ProjectGrid>
            </Tab>
            <Tab eventKey="Requested" title="Requested">
            <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
        </InputGroup>
                <ProjectGrid></ProjectGrid>
            </Tab>
            <Tab eventKey="Archived" title="Archived" >
            <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
        </InputGroup>
                <ProjectGrid></ProjectGrid>
            </Tab>
        </Tabs>
    </>
}

export default Innovator;