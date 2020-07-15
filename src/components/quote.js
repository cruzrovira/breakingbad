import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const QuoteStyled = styled.div`
  background: #fff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  margin: 1.5em 0;
  padding: 10px;
  width: 100%;
  .quote {
    position: relative;
  }

  .quote::before {
    content: open-quote;
    /* position: absolute; */
    color: #ddd;
    font-size: 100px;
    /* left: -10px; */
    /* right: -10px; */
  }

  .author {
    margin: 0;
    text-align: right;
  }
`;

const Quote = ({ quote }) => {
  return (
    <QuoteStyled>
      <p className="quote">{quote.quote}</p>
      <p className="author">Author: {quote.author}</p>
    </QuoteStyled>
  );
};
Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};
export default Quote;
