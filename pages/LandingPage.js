import { Heading, HStack, Button } from '@chakra-ui/react'
import ChakraUIHeader from '../components/Header'
import {useMoralis} from "react-moralis"


import Link from 'next/link'

function LandingPage({ Component, pageProps }) {

    const {enableWeb3, account, Moralis, user, authenticate} = useMoralis()

    async function handleWeb3() {
        // console.log(user)
        await enableWeb3()
        // await authenticate()
        // await Moralis.enableWeb3()
        // console.log(account)
        // await Moralis.link(account)  // maybe we dont even need linking...
    }

  return (
      <div>
            <Heading padding={'10px'}>Welcome</Heading>
            <HStack margin='50px'>
            <Link href="/lawyer">
                <Button>Lawyer Page</Button></Link>
            <Link href="/customer">
                <Button>Customer Page</Button></Link>
            </HStack>
            <Button onClick={handleWeb3}>Connect Wallet</Button>
        </div>
  )
}

export default LandingPage
