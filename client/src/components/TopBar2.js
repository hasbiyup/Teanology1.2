import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./TopBar.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Figure from "react-bootstrap/Figure";
import Axios from "axios";
import { BASE_URL } from '../config.js';

import pic from "./assets/Picture.png";
import profil from "./assets/profil.svg";
import onetwo from "./assets/one-two.svg";
import faq from "./assets/faq.svg";

const TopBar2 = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [toko, setToko] = useState([]);
  useEffect(() => {
    Axios.get(`${BASE_URL}/toko`).then((response) => {
      //console.log(response.data);
      setToko(response.data);
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} md={1}>
            <a>
              <i onClick={() => navigate(-1)} className="bi bi-arrow-left fs-3 text-dark res-topbar_left"></i>
            </a>
          </Col>

          <Col xs={8} md={10}>
            <InputGroup>
              <InputGroup.Text className="search__bar search__left">
                <i className="bi bi-search fs-6 text-secondary"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Search Tea/Mood" type="search" className="search__bar search__center" />
              <InputGroup.Text className="search__bar search__right">
                <i className="bi bi-filter-left fs-4"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col xs={2} md={1}>
            <a onClick={handleShow}>
              <i className="bi bi-list fs-3 float-end mt-1 res-topbar_right"></i>
            </a>
          </Col>
        </Row>
      </Container>

      <Offcanvas className="side" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Figure>
            <Figure.Image width={140} height={140} alt="171x180" src={pic} style={{ borderRadius: "50%", marginLeft: "110px" }} />
          </Figure>
          <ul className="mt-4 " style={{ listStyle: "none" }}>
            <li>
              <a href="#">
                <i class="bi bi-shop-window me-1 fs-4" style={{ color: "#539e6d" }}></i>
                <span style={{ marginLeft: "12px" }}>
                  {localStorage.getItem("name_toko") !== null
                  ? localStorage.getItem("name_toko")
                  : "Guest"}</span>
              </a>
            </li>
            <li className="mt-4">
              <a>
                <img alt="mt-profil" src={profil} style={{ width: "28px" }} />
                <span style={{ marginLeft: "12px" }}>About Us</span>
              </a>
            </li>
            <li className="mt-4">
              <a>
                <img alt="mt-onetwo" src={onetwo} style={{ width: "25px" }} />
                <span style={{ marginLeft: "12px" }}>One Two Tea!</span>
              </a>
            </li>
            <li className="mt-4">
              <a>
                <img alt="mt-faq" src={faq} style={{ width: "28px" }} />
                <span style={{ marginLeft: "12px" }}>FaQ</span>
              </a>
            </li>
          </ul>
          <a href="/login-toko">
            <div className="d-flex justify-content-center">
              <button className="btn btn-login">Sign in</button>
            </div>
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

function SideBar() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <TopBar2 key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default SideBar;
