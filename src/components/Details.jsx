import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Details = ({ data, setShowDetails, showDetails }) => {
  return (
    showDetails && (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: "200000",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Modal
          onHide={() => setShowDetails(false)}
          show={showDetails}
          style={{ zIndex: "2000000" }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ color: data.color }}
            >
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
      </div>
    )
  );
};

export default Details;
