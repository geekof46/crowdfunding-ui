import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectGrid from '../components/ProjectGrid'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Donor() {
    return <>
        <Tabs
            defaultActiveKey="ProjectsForDonarion"
            id="tabs-for-donor"
            className="mb-3"
            style={{ margin: '20px' }}
        >
            <Tab eventKey="ProjectsForDonarion" title="Projects For Donarion">
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
                <ProjectGrid action="Donate">
                </ProjectGrid>
            </Tab>
            <Tab eventKey="DonationHistory" title="Donation History">
                <Card>
                    <Card.Header>$100</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Supporting for creative work ProjectName
                            </p>
                            <footer className="blockquote-footer">
                                Date 23/04/2023
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>$100</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Supporting for creative work ProjectName
                            </p>
                            <footer className="blockquote-footer">
                                Date 23/04/2023
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>$100</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Supporting for creative work ProjectName
                            </p>
                            <footer className="blockquote-footer">
                                Date 23/04/2023
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>$100</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Supporting for creative work ProjectName
                            </p>
                            <footer className="blockquote-footer">
                                Date 23/04/2023
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Tab>
        </Tabs>
    </>
}

export default Donor;