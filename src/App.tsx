import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

const theme = extendTheme({
  styles: {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bg: mode('#10181e', '#10181e')(props),
      }
    })
  },
})


function App() {
  return (
    <ChakraProvider resetCSS={false} theme={theme}>
        <Header></Header>
        <Slider ></Slider>
    </ChakraProvider>

  )
}

export default App;
