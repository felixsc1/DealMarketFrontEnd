import '../styles/globals.css'
import { ChakraProvider, Heading, HStack, Button } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";
import ChakraUIHeader from '../components/Header'

import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  const appId=""
  const serverUrl="https://hvtduwpsk6x7.usemoralis.com:2053/server"

  return (
    <ChakraProvider>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Heading padding={'10px'}>Test dApp</Heading>
        <ChakraUIHeader />
        <Component {...pageProps} />
        <HStack margin='50px'>
          <Link href="/lawyer">
            <Button>Lawyer Page</Button></Link>
          <Link href="/customer">
            <Button>Customer Page</Button></Link>
        </HStack>
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp
