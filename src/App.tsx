//外部のlibraryからimportしたもの
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
//自分のローカルファイルからimport
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
