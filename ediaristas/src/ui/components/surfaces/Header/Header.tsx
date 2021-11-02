import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Container, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo2.png"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
