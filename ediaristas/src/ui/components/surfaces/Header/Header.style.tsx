import { styled } from "@mui/material";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  background-color: black;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiTollbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiTollbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;

  ${({ theme }) => theme.breakpoints.up("md")} {
      height: 47px;
  }
`;
