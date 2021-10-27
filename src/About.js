import React from "react";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@material-ui/core";
const About = () => {
  return (
    <Row>
      <Col sm={1}> </Col>
      <Col sm={10} className="somethingnew">
        <Typography variant="h4">About Our Company</Typography>

        <hr />
        <Row>
          <Col style={{ borderRight: "gray solid 0.1px" }}>
            <br />

            <img
              style={{
                width: 490,
                margin: 10,
                marginLeft: 80,
                marginTop: 75,
                borderRadius: 5,
              }}
              alt="ok"
              src="https://media.discordapp.net/attachments/739625794564915274/843221040012591124/unknown.png?width=2156&height=955"
            />

            <br />
            <br />
            <br />
            <br />

            <Typography variant="h4" className="fortext">
              <img
                style={{
                  width: 90,
                  borderRadius: 5,
                }}
                alt="ok"
                src="  https://cdn.discordapp.com/attachments/739625794564915274/844061720732499988/unknown.png"
              />
              History Of Owner
            </Typography>
            <hr />
            <Typography varinat="h7" className="fortext">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Typography>
            <hr />
          </Col>

          <Col style={{ marginLeft: 80, marginRight: 0, marginTop: 30 }}>
            <Typography variant="h4">Georgian House</Typography>
            <hr />
            <Typography varinat="h7">
              is a Canadian owned and operated company founded in 2000. We
              import, warehouse and distribute a wide selection of pure natural
              products from Eastern European Georgia.
              <br />
              Our experience in the Organic and Natural Food industry enables us
              to provide high quality and consistent products by reliable
              service. As your supplier, our goal is to provide your business
              with unique, health-conscious product lines that help you to stand
              out from your competitors.
              <br />
              We provide the healthy products that our customers are looking for
              and happy to assist further in anything they might need. Georgian House isn’t
              just a supplier. We’d like to be your strategic partner and assist
              you growing your business and differentiate yourself from regular
              supermarkets by offering wider choice of health food products. In
              addition, we continuously source, formulate, and even manufacture
              unique health food commodity.
            </Typography>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img
              style={{
                width: 490,
                marginLeft: 30,
                marginTop: 35,
                borderRadius: 5,
              }}
              alt="ok"
              src="https://media.discordapp.net/attachments/739625794564915274/843221040012591124/unknown.png?width=2156&height=955"
            />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <hr />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Our Partners
            </Typography>

            <hr />
            <Row>
              <Col sm={2} className="s1"></Col>
              <Col sm={2} className="s2"></Col>
              <Col sm={2} className="s3"></Col>
              <Col sm={2} className="s4"></Col>
              <Col sm={2} className="s5"></Col>
            </Row>
            <Row>
              <Col sm={2} className="s6"></Col>
              <Col sm={2} className="s7"></Col>
              <Col sm={2} className="s8"></Col>
              <Col sm={2} className="s9"></Col>
              <Col sm={2} className="s10"></Col>
            </Row>
            <Row>
              <Col sm={2} className="s11"></Col>
              <Col sm={2} className="s12"></Col>
              <Col sm={2} className="s13"></Col>
              <Col sm={2} className="s14"></Col>
              <Col sm={2} className="s15"></Col>
            </Row>
            <Row>
              <Col sm={2} className="s16"></Col>
              <Col sm={2} className="s17"></Col>
              <Col sm={2} className="s18"></Col>
              <Col sm={2} className="s19"></Col>
              <Col sm={2} className="s20"></Col>
            </Row>
            <Row>
              <Col sm={2} className="s21"></Col>
              <Col sm={2} className="s22"></Col>
              <Col sm={2} className="s23"></Col>
              <Col sm={2} className="s24"></Col>
              <Col sm={2} className="s25"></Col>
            </Row>
            <Row>
              <Col sm={2} className="s26"></Col>
              <Col sm={2} className="s27"></Col>
              <Col sm={2} className="s28"></Col>
              <Col sm={2} className="s29"></Col>
              <Col sm={2} className="s30"></Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col sm={1}></Col>
    </Row>
  );
};

export default About;
