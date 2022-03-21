import { Heading, HStack, Button, Text, Container } from '@chakra-ui/react'
import ChakraUIHeader from '../components/Header'
import {useMoralis} from "react-moralis"


import Link from 'next/link'

function LandingPage({ Component, pageProps }) {

    const {enableWeb3, account, Moralis, user, authenticate} = useMoralis()

    // console.log(user)
    async function handleWeb3() {
        // console.log(user)
        await enableWeb3()
        // await authenticate()
        // await Moralis.enableWeb3()
        // console.log(account)
        // await Moralis.link(account)  // maybe we dont even need linking...
    }

  return (
      <Container>
            <Heading padding={'10px'}>Welcome!   {user.attributes.email}</Heading>
            <Text padding={'10px'}>Please connect your Metamask wallet before proceeding.</Text>
            <HStack margin='10px'>
                <Button onClick={handleWeb3} colorScheme='red'>Connect Wallet</Button>
                <Link href="/customer">
                    <Button>Customer Page</Button></Link> 
                <Link href="/lawyer">
                    <Button>Lawyer Page</Button></Link>
                
            </HStack>
            
        </Container>
  )
}

export default LandingPage
