import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./hooks/useAuth";
// import "assets/css/App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme/theme";
import App from "./App";
import Layout from "./lib/Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <BrowserRouter>
    {/* <AuthProvider> */}
    <ChakraProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ChakraProvider>
    {/* </AuthProvider> */}
  </BrowserRouter>
  // </StrictMode>
);
