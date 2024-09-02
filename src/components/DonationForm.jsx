import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const DonationForm = (props) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g. send data to server
    console.log('Donation Amount:', donationAmount);
    console.log('Comment:', comment);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "projectId": props.projectId,
      "donationAmount": donationAmount,
      "comment": comment
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    setDisabled(true)
    console.log(raw)

    fetch("https://m754i5hsn5.execute-api.us-west-2.amazonaws.com/dev/api/v1/projects/"+props.projectId+"/donations", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        setIsSuccess(true)
        setRespMessage(result)
    })
    .catch((error) => {
        //show error
        console.log(error);
        setIsSuccess(false)
        setRespMessage("Failed to add donation try agian")
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="donationAmount" style={{ margin: '10px' }}>
        <Form.Label>Donation Amount:</Form.Label>
        <Form.Control
          type="number"
          value={donationAmount}
          onChange={(event) => setDonationAmount(event.target.value)}
          placeholder="Enter donation amount"
        />
      </Form.Group>

      <Form.Group controlId="comment" style={{ margin: '10px' }}>
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter comment"
        />
      </Form.Group>

      {
        (respMessage !== "" && isSuccess) &&
        <Alert key="Primary" variant="success">
          {respMessage}
        </Alert>
      }

      {
        (respMessage !== "" && !isSuccess) &&
        <Alert key="Primary" variant="danger">
          {respMessage}
        </Alert>
      }

      {
        (respMessage === "") &&
        <>
          <Button disabled={disabled} style={{ margin: '10px', marginLeft: '80%' }} type="submit">Submit</Button>
        </>
      }
    </Form>
  );
};

export default DonationForm;