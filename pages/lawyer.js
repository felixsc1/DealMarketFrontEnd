import {Heading, Box, VStack } from '@chakra-ui/react'
import CreateDeal from '../components/CreateDeal'
import ShowDeal from '../components/ShowDeal'
import { useMoralisQuery, useMoralis } from "react-moralis"
import { React, useEffect, useState } from 'react';
import Checkboxes from '../components/Checkboxes'


function LawyerPage() {

    // const {Moralis} = useMoralis()
    // Moralis.enableWeb3()



    // const { data, error, isLoading } = useMoralisQuery("Deal", query =>
    //     query
    //         .equalTo("dealId_decimal", 1))

    const { data, error, isLoading } = useMoralisQuery("Deal")
    const [dealData, setDealData] = useState()
    useEffect(() => {
        setDealData(data)
    },[data])

    // const [doRender, setDoRender] = useState(false)

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


  return (
      <Box padding={'10px'}>
        <VStack spacing={4} align='left'>
            <Heading>Lawyer Page</Heading>
            <CreateDeal />
            <Heading>Previous Deals:</Heading>
            <Checkboxes handleCheckBox={handleCheckBox}/>
            {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
            <ShowDeal user='lawyer' dealData={dealData} doRender={doRender}/>
        </VStack>
    </Box>
  )
}

export default LawyerPage
