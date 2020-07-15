import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import styled from "styled-components";

import Quote from "./components/quote";
import Spinners from "./components/spinners";
const AppStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;

  img {
    width: 100%;
  }
  button {
    border-radius: 4px;
    border: none;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
    color: #007d35;
    cursor: pointer;
    line-height: 3em;
    outline: none;
    width: 16em;
  }
  button:active {
    transform: scale(0.9);
  }
`;

const App = () => {
  let [quote, setQuote] = useState({});
  let [spinners, setSpinners] = useState(true);

  const searchQuote = async () => {
    setSpinners(true);
    let url = "https://www.breakingbadapi.com/api/quote/random";
    let data = await fetch(url);
    let dataJson = await data.json();
    setQuote(dataJson[0]);
    setSpinners(false);
  };

  useEffect(() => {
    searchQuote();
  }, []);

  return (
    <AppStyled>
      <img src={logo} alt="logo" />
      {spinners ? <Spinners /> : <Quote quote={quote} />}
      <button onClick={searchQuote}>Quote</button>
    </AppStyled>
  );
};

export default App;
