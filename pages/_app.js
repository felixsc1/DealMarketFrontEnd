import '../styles/globals.css'
import { ChakraProvider, Heading, HStack, Button } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {

  const appId="VpSaHPG0SiNIokmMas71hyiS1Xa6tUCuTQaDuO1G"
  const serverUrl="https://81sdcwstfc5t.usemoralis.com:2053/server"

  return (
    <ChakraProvider>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
