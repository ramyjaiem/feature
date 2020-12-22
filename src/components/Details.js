import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const Details = ({ data, setShowDetails, showDetails }) => {
  let history = useHistory();
  return (
    <Modal
      show={showDetails}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => history.push("/")}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:data.color}}>
          {data.first_name + " " + data.last_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>Phone number : {data.phone_number}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowDetails(false)} variant="danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Details;
