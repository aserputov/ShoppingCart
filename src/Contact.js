import React from "react";
import Typography from "@material-ui/core/Typography";
import { Col, Row } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const Contact = () => {
  const position = [43.77602751307066, -79.4725983171986];
  return (
    <div>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10} className="somethingnew">
          <Typography variant="h4">Contact Us </Typography>
          <hr />
          <br />
          <Row>
            <Col sm={6}>
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: 500, borderRadius: 20, zIndex: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </Col>
            <Col sm={6}>
              <Typography variant="h4" className="fortext">
                Information
              </Typography>
              <hr />
              <Typography variant="h6">Adress:</Typography>
              <Typography variant="h7">
                319 Supertest Rd, North York, ON M3J 2M4
              </Typography>
              <hr />
              <Typography variant="h6">Working Hours</Typography>
              <hr />
              Monday 10a.m.–7p.m.
              <br /> Tuesday 10a.m.–7p.m.
              <br /> Wednesday 10a.m.–7p.m.
              <br /> Thursday 10a.m.–7p.m.
              <br /> Friday 10a.m.–7:30p.m.
              <br /> Saturday 11a.m.–8p.m.
              <br /> Sunday 11a.m.–8p.m.
              <hr />
              <br />
              <Row>
                <Col sm={3}>
                  <a
                    href="https://www.instagram.com/sweezard_naturals/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <InstagramIcon style={{ fontSize: 35, margin: 1 }} />
                  </a>
                  <a
                    href="https://www.facebook.com/georgianhouseincanada/?ref=pages_you_manage/"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <FacebookIcon style={{ fontSize: 35, margin: 1 }} />
                  </a>
                  <TwitterIcon style={{ fontSize: 35, margin: 1 }} />
                </Col>
                <Col sm={5}>
               
                  <EmailIcon
                    style={{ fontSize: 35 }}
                  />
                  <Typography variant="h7">info@sweezard.com</Typography>
                </Col>
                <Col sm={4}>
                <PhoneIphoneIcon
                style={{ fontSize: 35 }}
              />
              <Typography variant="h7">+1 (416) 833 19 87</Typography></Col>
              </Row>
             
            </Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Contact;
