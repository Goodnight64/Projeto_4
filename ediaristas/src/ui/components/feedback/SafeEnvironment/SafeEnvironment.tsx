import React from "react";
import { SafeEnvironmentoContainer } from "./SafeEnvironment.style";
import { Container } from "@mui/material";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentoContainer>
      <Container>
        Ambiente 100% Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentoContainer>
  );
};

export default SafeEnvironment;
