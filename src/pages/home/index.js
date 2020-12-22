import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./style.css";
const Home = ({ children }) => {
  return (
    <div className="box">
      <Button style={{backgroundColor:"#46139f"}} className="mb-2" name="All Contacts">
        <Link to="/AllContacts" className="text-white">
          All Contacts
        </Link>
      </Button>
      <Button style={{backgroundColor:"#ff7f50"}} name="US Contacts">
        <Link to="/USContacts" className="text-white">
          US Contacts
        </Link>
      </Button>
      {children}
    </div>
  );
};

export default Home;
