import {Heading, Box, VStack } from '@chakra-ui/react'
import CreateDeal from '../components/CreateDeal'
import ShowDeal from '../components/ShowDeal'
import { useMoralisQuery, useMoralis } from "react-moralis"
import { React, useEffect, useState } from 'react';

function LawyerPage() {


    // const { data, error, isLoading } = useMoralisQuery("Deal", query =>
    //     query
    //         .equalTo("dealId_decimal", 1))

    const { data, error, isLoading } = useMoralisQuery("Deal")

    const [dealData, setDealData] = useState()
    useEffect(() => {
        setDealData(data)
    },[data])


    // const {data2, error2, isLoading2} = useMoralisQuery("Payments")
    // console.log(data2)

  return (
      <Box padding={'10px'}>
        <VStack spacing={4} align='left'>
        <Heading>Lawyer Page</Heading>
        {/* <Connect /> */}
        <CreateDeal />
        {/* <GetDealStatus dealId={1} /> */}
        <Heading>Previous Deals:</Heading>
        <ShowDeal user='lawyer' dealData={dealData}/>
        </VStack>
    </Box>
  )
}

export default LawyerPage
