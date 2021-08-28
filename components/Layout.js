import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

import "semantic-ui-css/semantic.min.css";

const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <h1>I am a footer</h1>
    </Container>
  );
};

export default Layout;
