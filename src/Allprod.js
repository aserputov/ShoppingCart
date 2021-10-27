import React from "react";
import { useState, useEffect } from "react";
import Products from "./Products";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
const Allprod = (props) => {
  const { onAdd } = props;
  const [compotes, setCompotes] = useState({ blogpost: [] });
  const [PicklesReadyMeals, setPicklesReadyMeals] = useState({ blogpost: [] });
  const [lemonade, setLemonade] = useState({ blogpost: [] });
  const [sauces, setSauces] = useState({ blogpost: [] });
  const [honey, setHoney] = useState({ blogpost: [] });
  const [preservesjams, setPreservesjams] = useState({ blogpost: [] });
  const [seasoningspices, setSeasoningspices] = useState({ blogpost: [] });
  const [snacks, setSnacks] = useState({ blogpost: [] });
  const [flour, setFlour] = useState({ blogpost: [] });
  const [cheese, setCheese] = useState({ blogpost: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/compotes"
      );
      setCompotes(result.data);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/picklesreadymeals"
      );
      setPicklesReadyMeals(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/lemonade"
      );
      setLemonade(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/sauces"
      );
      setSauces(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/honey"
      );
      setHoney(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/preservesjams"
      );
      setPreservesjams(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/seasoningspices"
      );
      setSeasoningspices(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/snacks"
      );
      setSnacks(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/flour"
      );
      setFlour(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://agile-eyrie-45739.herokuapp.com/cheese"
      );
      setCheese(result.data);
    };
    fetchData();
  }, []);

  return ( 
    <>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10} className="somethingnew">
          <h2 style={{ margin: 20, textAlign: "center" }}>Products</h2>
          <hr />
          <br />
          <h2 style={{ margin: 20 }} id="sauces">Sauces</h2>
          <hr />
          <Products data={compotes} onAdd={onAdd} />
          <h2 style={{ margin: 20 }}>PicklesReadyMeals</h2>
          <hr />
          <Products data={PicklesReadyMeals} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }} id="lemonades">Lemonades</h2>
          <hr />
          <Products data={lemonade} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }}>Sauces</h2>
          <hr />
          <Products data={sauces} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }}>Honey</h2>
          <hr />
          <Products data={honey} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }}>Preserves&jams</h2>
          <hr />
          <Products data={preservesjams} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }}>Seasonings&Spices</h2>
          <hr />
          <Products data={seasoningspices} onAdd={onAdd} />
          <hr />
          <h2 style={{ margin: 20 }}>Snacks</h2>
          <hr />
          <Products data={snacks} onAdd={onAdd} />
          <h2 style={{ margin: 20 }}>Flour</h2>
          <hr />
          <Products data={flour} onAdd={onAdd} />
          <h2 style={{ margin: 20 }}>Cheese</h2>
          <hr />
          <Products data={cheese} onAdd={onAdd} />
        
         
        </Col>
        <Col sm={1}></Col>
      </Row>
    </>
  );
};

export default Allprod;
