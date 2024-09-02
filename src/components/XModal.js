import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function XModal(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  variant="primary" style={{width:'80%',backgroundColor :'#5fb4e7'}} onClick={handleShow}>
        {props.action}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {console.log(props)}
          {props.children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default XModal;