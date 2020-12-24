import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";


const Home = ({ children }) => {
  return (
    <div className="box">
      <h1 className="mb-4">React test - UPWORK</h1>
      <Link to="/AllContacts" className="text-white">
        <Button
          style={{ backgroundColor: "#46139f" }}
          className="mb-2"
          name="All Contacts"
          size="lg"
        >
          All Contacts
        </Button>
      </Link>
      <Link to="/USContacts" className="text-white">
        <Button
          style={{ backgroundColor: "#ff7f50" }}
          name="US Contacts"
          size="lg"
        >
          US contacts
        </Button>
      </Link>
      {children}
    </div>
  );
};

export default Home;
