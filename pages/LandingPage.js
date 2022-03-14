import { Heading, HStack, Button } from '@chakra-ui/react'
import ChakraUIHeader from '../components/Header'

import Link from 'next/link'

function LandingPage({ Component, pageProps }) {

  return (
      <div>
            <Heading padding={'10px'}>Welcome</Heading>
            <HStack margin='50px'>
            <Link href="/lawyer">
                <Button>Lawyer Page</Button></Link>
            <Link href="/customer">
                <Button>Customer Page</Button></Link>
            </HStack>
        </div>
  )
}

export default LandingPage
