import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
