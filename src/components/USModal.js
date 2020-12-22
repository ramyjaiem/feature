import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { getUSContacts } from "../services";
import Details from "./Details";
const USModal = (props) => {
  let history = useHistory();
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [dataModal, setData] = useState(null);

  useEffect(() => {
    getUSContacts(page, filter).then((r) => setResult(r));
  }, [page, filter]);

  return (
    <>
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => history.push("/")}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            US Contacts
          </Modal.Title>
        </Modal.Header>
        {result && (
          <Modal.Body>
            <input
              class="form-control w-50 mb-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
            {}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">first name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">details</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((key) => (
                  <tr key={key}>
                    <th scope="row">{result[key].primary_contact_id}</th>
                    <td>{result[key].first_name}</td>
                    <td>{result[key].last_name}</td>
                    <td>
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "2px solid #46139f",
                          color: "#46139f",
                        }}
                        onClick={() => {
                          setShowDetails(true);
                          setData(result[key]);
                        }}
                      >
                        more
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <input
              type="checkbox"
              name="even"
              className="mr-2"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label for="even">only even</label>

            <ul class="pagination float-right">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                  onClick={() => {
                    if (page > 1) {
                      setPage(page + 1);
                    }
                  }}
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" onClick={() => setPage(page + 1)}>
                  Next
                </a>
              </li>
            </ul>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "##46139f" }}
            onClick={() => history.push("/AllContacts")}
          >
            All Contacts
          </Button>
          <Button onClick={() => history.push("/")} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {dataModal && <Details data={dataModal} setShowDetails={setShowDetails} showDetails={showDetails} />}
    </>
  );
};

export default USModal;
