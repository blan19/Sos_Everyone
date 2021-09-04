import React, { FC } from "react";
import styled from "@emotion/styled";

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 770px;
  }

  @media screen and (max-width: 770px) {
    width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 465px;
  }

  @media screen and (max-width: 465px) {
    padding: 0 6.2vw;
    width: 325px;
  }
`;

const Responsive: FC = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
