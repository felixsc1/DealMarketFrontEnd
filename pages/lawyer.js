import {Heading, Box, VStack, Button } from '@chakra-ui/react'
import CreateDeal from '../components/CreateDeal'
import ShowDeal from '../components/ShowDeal'
import { useMoralisQuery, useMoralis } from "react-moralis"
import { React, useEffect, useState } from 'react';
import Checkboxes from '../components/Checkboxes'


function LawyerPage() {

    const {user, logout, Moralis, enableWeb3, isWeb3Enabled} = useMoralis()

    const { data, error, isLoading } = useMoralisQuery("Deals")
    const [dealData, setDealData] = useState()
    useEffect(() => {
        setDealData(data)
    },[data])

    useEffect( async () => {
        await enableWeb3()
    },[])

    // console.log("web3 enabled:" + isWeb3Enabled)

    const [doRender, setDoRender] = useState({
        open: true,
        paid: true,
        complete: true,
        cancelled: true
    })

    function handleCheckBox(event) {
        // console.log(event)
        setDoRender(x => {
            return {
                ...x,
                [event.target.name]: event.target.checked
            }
    })}

    if (user && !user.attributes.isLawyer) {
    return (<>Access only for lawyers</>)}


  return (
      <Box padding={'10px'}>
        <VStack spacing={4} align='left'>
            <Heading>Lawyer Page</Heading>
            {isWeb3Enabled && <CreateDeal />}
            <Heading>Previous Deals:</Heading>
            <Checkboxes handleCheckBox={handleCheckBox}/>
            <Button width={'100px'} onClick={() => window.location.reload(false)}>Refresh</Button>
            {isWeb3Enabled && <ShowDeal user='lawyer' dealData={dealData} doRender={doRender}/>}
        </VStack>
    </Box>
  )
}

export default LawyerPage
