import {Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import ShowDeal from '../components/ShowDeal'
import { useMoralisQuery } from "react-moralis"
import { React, useEffect, useState } from 'react'
import Query from '../components/Query'

function CustomerPage() {

    const [selectedDeal, setSelectedDeal] = useState("")

    function handleDealSelection(event) {
            setSelectedDeal(parseInt(event.target.value))
            // console.log(event.target.value)
        }
    // for the customer we only want to display the corresponding deal ID
    // const { fetch, data, error, isLoading } = useMoralisQuery("Deal", query =>
    //     query
    //         .equalTo("dealId_decimal", selectedDeal),
    //         [],
    //         {autoFetch: false})

    // const [dealData, setDealData] = useState()

    // useEffect(() => {
    //         setDealData(data)
    //         console.log(data)
    //     },[data])
        
    // function handleSelectDeal() {
    //    fetch()
    //    console.log(data)
    // }


    const [queryData, setQueryData] = useState()
    const queryToParent = (queryData) => {
        setQueryData(queryData)
        // console.log(queryData)
        // console.log(queryData[0].id.slice(0,4))
    }

    const [doRender, setDoRender] = useState({
        open: true,
        paid: true,
        complete: true,
        cancelled: true
    })

  return (
      <div>
        <Heading margin='20px'>Customer Page</Heading>
        <FormControl border={'2px solid black'} width={'200px'} margin='20px'>
            <FormLabel padding={'5px'}>Your deal ID:</FormLabel>
            <Input margin={'10px'} type="text" variant='filled' placeholder='enter deal ID' size='sm' width='{50px}' onChange={handleDealSelection} />
            {selectedDeal && <Query queryToParent={queryToParent} selectedDeal={selectedDeal}/>}
        </FormControl>
        {/* <Heading>Your Deals:</Heading> */}
        <ShowDeal user='customer' dealData={queryData} doRender={doRender}/>
    </div>
  )
}

export default CustomerPage
