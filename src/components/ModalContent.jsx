import React, { useState, useEffect } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { getALLContacts, getUSContacts } from "../services";
import Details from "./Details";

const ModalContent = (props) => {
  // ditract props
  const { type, name, even } = props;

  // using history
  let history = useHistory();

  //component states for handling logic
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(0);
  const [hasMore, SetHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataModal, setData] = useState(null);

  const getContacts = () => {
    if (type === "us") {
      setLoading(true);
      getUSContacts(page, filter).then((response) => {
        const { total, contacts } = response;
        setResult(contacts);
        setTotal(total);
        setLoading(false);
      });
    } else {
      setLoading(true);
      getALLContacts(page, filter).then((response) => {
        const { total, contacts } = response;
        setResult(contacts);
        setTotal(total);
        setLoading(false);
      });
    }
  };

  const updateContacts = () => {
    if (type === "us") {
      getUSContacts(page, filter).then((response) => {
        let contacts = response.contacts;
        console.log(contacts);
        setResult((prev) => ({ ...prev, ...contacts }));
      });
    } else {
      getALLContacts(page, filter).then((response) => {
        let contacts = response.contacts;
        console.log(contacts);
        setResult((prev) => ({ ...prev, ...contacts }));
      });
    }
  };
  // fetching data
  useEffect(() => {
    getContacts();
  }, [filter, type]);

  // my infinit scroll logic
  useEffect(() => {
    if (result) {
      if (Object.keys(result) >= total) {
        SetHasMore(false);
      } else {
        updateContacts();
      }
    }
  }, [page]);

  const fetchMoreData = () => {
    if (Object.keys(result).length >= total) {
      SetHasMore(false);
    } else {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => history.push("/")}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
        </Modal.Header>
        {result && (
          <Modal.Body>
            <input
              class="form-control w-50 mb-4"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
            {}
            <InfiniteScroll
              dataLength={Object.keys(result).length}
              next={fetchMoreData}
              loader={<h4>Loading...</h4>}
              hasMore={hasMore}
              height={400}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Table
                striped
                bordered
                hover
                size="sm"
                style={{ textAlign: "center", height: "400px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">first name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Status</th>
                    <th scope="col">details</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(result).map((key, id) => {
                    if (checked) {
                      if (result[key].id % 2 !== 0) {
                        return null;
                      }
                    }
                    return (
                      <tr key={id}>
                        <th scope="row" style={{ color: result[key].color }}>
                          {result[key].id}
                        </th>
                        <td>{result[key].first_name}</td>
                        <td>{result[key].last_name}</td>
                        <td>{result[key].phone_number}</td>
                        <td>{result[key].status}</td>
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
                    );
                  })}
                </tbody>
              </Table>
            </InfiniteScroll>
            {even && (
              <>
                <input
                  type="checkbox"
                  name="even"
                  className="mr-2 mb-4"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label for="even">only even</label>
              </>
            )}
          </Modal.Body>
        )}
        <Modal.Footer>
          {type === "us" ? (
            <Button
              style={{ backgroundColor: "#46139f" }}
              onClick={() => history.push("/AllContacts")}
            >
              All Contacts
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#ff7f50" }}
              onClick={() => history.push("/USContacts")}
            >
              US Contacts
            </Button>
          )}

          <Button onClick={() => history.push("/")} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {dataModal && (
        <Details
          data={dataModal}
          setShowDetails={setShowDetails}
          showDetails={showDetails}
        />
      )}
    </div>
  );
};

export default ModalContent;
