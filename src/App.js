import React from "react";
import { Container } from "@material-ui/core";
import Routes from "./router";

export const App = () => {
  return (
    <Container maxWidth={false}>
      <Routes />
    </Container>
  );
};
