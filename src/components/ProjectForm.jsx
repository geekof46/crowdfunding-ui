import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const ProjectForm = () => {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [expectedAmount, setExpectedAmount] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [respMessage, setRespMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(projectName, description, expectedAmount)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        setDisabled(false)
        const raw = JSON.stringify({
            "name": projectName,
            "thumbnailLink": null,
            "description": description,
            "category": "MUSIC",
            "subCategory": "HIPHOP",
            "innovatorId": "USER-c05ca4a2",
            "requestedAmount": expectedAmount
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://m754i5hsn5.execute-api.us-west-2.amazonaws.com/dev/api/v1/users/USER-c05ca4a2/projects", requestOptions)
            .then((response) =>  response.text())
            .then((result) => {
                console.log(result)
                setIsSuccess(true)
                setRespMessage(result)
            })
            .catch((error) => {
                //show error
                console.log("show error");
                setIsSuccess(false)
                setRespMessage("Failed to create project")
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group style={{ margin: '10px' }} controlId="projectName">
                <Form.Label><strong>Project Name :</strong></Form.Label>
                <Form.Control
                    type="text"
                    value={projectName}
                    onChange={(event) => setProjectName(event.target.value)}
                />
            </Form.Group>

            <Form.Group style={{ margin: '10px' }} controlId="description">
                <Form.Label><strong>Description:</strong></Form.Label>
                <Form.Control
                    as="textarea"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>

            {/* <Form.Group controlId="category">
        <Form.Label>Project Category</Form.Label>
        <Dropdown>
          <DropdownButton id="dropdown-basic" title="Select Category">
            {categories.map((category) => (
              <Dropdown.Item
                key={category.value}
                value={category.value}
                onClick={(event) => setCategory(event.target.value)}
              >
                {category.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>
      </Form.Group> */}

            <Form.Group style={{ margin: '10px' }} controlId="expectedAmount">
                <Form.Label><strong>Expected Amount</strong></Form.Label>
                <Form.Control
                    type="number"
                    value={expectedAmount}
                    onChange={(event) => setExpectedAmount(event.target.value)}
                />
            </Form.Group>
            {
                (respMessage != "" && isSuccess) &&
                <Alert key="Primary" variant="success">
                    {respMessage}
                </Alert>
            }

            {
                (respMessage != "" && !isSuccess) &&
                <Alert key="Primary" variant="danger">
                    {respMessage}
                </Alert>
            }

            {
                (respMessage == "") &&
                <>
                <Button disabled={disabled} style={{ margin: '10px', marginLeft: '80%' }} type="submit">Submit</Button>
                </>
            }
            
        </Form>
    );
};

export default ProjectForm;