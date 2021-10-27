import React from "react";

import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import queryString from "query-string";
import Products from "./Products";
import axios from "axios";
const Result = (props) => {
  const { onAdd } = props;
  const query = props.query ? queryString.parse(props.query) : null;
  const [result, setResult] = useState({ blogpost: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://agile-eyrie-45739.herokuapp.com/result?name=${query.name}`
      );

      setResult(result.data);
    };

    fetchData();
  }, [query.name]);

  return (
    <>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10} className="somethingnew">
          <h2 style={{ margin: 20, textAlign: "center" }}>Search Results </h2>
          <hr />
          <br />
          <h2 style={{ margin: 20 }}>PicklesReadyMeals</h2>
          <hr />
          <Products data={result} onAdd={onAdd} />
          <hr />
        </Col>
        <Col sm={1}></Col>
      </Row>
    </>
  );
};

export default Result;
