import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectGrid from '../components/ProjectGrid'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import XSpinner from '../components/XSpinner';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { UserRole } from '../model/UserRole';

function Donor() {

    const [requestedProjectData, setRequestedProjectData] = useState([]);
    const [isLoading, setIsloading] = useState([]);

    useEffect(() => {
        setIsloading(true)
        fetch("https://m754i5hsn5.execute-api.us-west-2.amazonaws.com/dev/api/v1/projects?status=REQUESTED&pageSize=10&next=&userId=USER-c05ca4a2")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setRequestedProjectData(json.records)
                setIsloading(false)
            })
            .catch(error => console.error(error));
    }, []);

    return <>
        <Tabs
            defaultActiveKey="ProjectsForDonarion"
            id="tabs-for-donor"
            className="mb-3"
            style={{ margin: '20px' }}
        >
            <Tab eventKey="ProjectsForDonarion" title="Projects For Donarion">
                {isLoading && <XSpinner></XSpinner>}
                {!isLoading &&
                    <>
                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            <Form.Control aria-label="Text input with checkbox" />
                        </InputGroup>
                        <ProjectGrid data={requestedProjectData} userRole={UserRole.DONOR} action="Donate"></ProjectGrid>
                    </>
                }

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