import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled, { ThemeProvider } from "styled-components";
import App from "./App";
import themeSetup from "./theme/theme";

const A = styled.div`
  height: 20px;
  background-color: ${({ theme }) => theme.vibrant};
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeSetup}>
      <A />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
