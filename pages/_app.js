import '../styles/globals.css'
import { ChakraProvider, Heading, HStack, Button } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {

  const appId="WG7LhO4LwzpgKA31MSO2T2wpjugzz1WkoZr5qLAk"
  const serverUrl="https://hvtduwpsk6x7.usemoralis.com:2053/server"

  return (
    <ChakraProvider>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
