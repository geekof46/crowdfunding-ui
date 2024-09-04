
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectGrid from '../components/ProjectGrid'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import XSpinner from '../components/XSpinner';
import XModal from '../components/XModal';
import ProjectForm from '../components/ProjectForm';
import Col from 'react-bootstrap/Col';
import { UserRole } from '../model/UserRole';

function Innovator() {

  /**
   * TODO refactor later to call specific to different tab as component
   */
  const [requestedProjectData, setRequestedProjectData] = useState([]);
  const [isLoading, setIsloading] = useState([]);
  const [archivedProjectData, setArchivedProjectData] = useState([]);

  useEffect(() => {
    setIsloading(true)
    fetch('https://m754i5hsn5.execute-api.us-west-2.amazonaws.com/dev/api/v1/users/USER-c05ca4a2/projects?status=REQUESTED&pageSize=6&next=')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setRequestedProjectData(json.records)
        setIsloading(false)
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setIsloading(true)
    fetch('https://m754i5hsn5.execute-api.us-west-2.amazonaws.com/dev/api/v1/users/USER-c05ca4a2/projects?status=ARCHIVED&pageSize=6&next=')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setArchivedProjectData(json.records)
        setIsloading(false)
      })
      .catch(error => console.error(error));
  }, []);

  return <>
    <Row>
      <Col xs={10}>
      </Col>
      <Col xs={2}>
      <XModal title="Project" style={{ margin: '10px', marginLeft: '80%' }} variant="primary" action="Create">
           <ProjectForm></ProjectForm>
        </XModal>
      </Col>
    </Row>

    <Tabs
      defaultActiveKey="Requested"
      id="tabs-for-innovators"
      className="mb-3"
      style={{ margin: '20px' }}
    >
      <Tab eventKey="Requested" title="Requested">
        {isLoading && <XSpinner></XSpinner>}
        {!isLoading && <>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
          <ProjectGrid data={requestedProjectData}></ProjectGrid>
        </>}
      </Tab>
      <Tab eventKey="Archived" title="Archived" >
        {isLoading && <XSpinner></XSpinner>
        }
        {!isLoading &&
          <>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
            <ProjectGrid 
            data={archivedProjectData}
            userRole={UserRole.INNOVATOR}
            ></ProjectGrid>
          </>
        }
      </Tab>
    </Tabs>
  </>
}

export default Innovator;