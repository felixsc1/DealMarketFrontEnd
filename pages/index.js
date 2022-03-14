import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from "react-moralis"
import LandingPage from './LandingPage'
import Login from '../components/Login'
import { Button } from '@chakra-ui/react'

export default function Home() {
  const {isAuthenticated, logout} = useMoralis()
  return (
    <div>
      {isAuthenticated ? (
        <> 
          <LandingPage />
          <Button onClick={logout}>Sign Out</Button>
        </>
        ) : (<Login />)}
    </div>
  )
}
