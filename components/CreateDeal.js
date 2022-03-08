import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import { React, useState } from 'react';
import { Input, Stack, Button, Box, Center, Heading, FormControl, FormLabel} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as constant from '../contracts/MarketPlaceContract'

export default function CreateDealComponent() {

    const [dealData, setDealData] = useState({
        sender: "",
        receiver: "",
        price: 0,
        token: "",
        date: null
    })


    function handleChange(event) {
        event.persist() // see https://stackoverflow.com/questions/61807662/reactjs-cannot-read-property-name-of-null
        setDealData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleDate(event) {
        // solidity expects unix timestamp: https://stackoverflow.com/questions/11893083/convert-normal-date-to-unix-timestamp
        // but to display date on timepicker we have to store javascript time object for now...
        setDealData(prevData => {
            return {
                ...prevData,
                date: event
            }
        })
    }

    const { Moralis } = useMoralis()
    //const contractProcessor = useWeb3ExecuteFunction()
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
    //async function handleCreateDeal() {
        // Here is where we actually call a smart contract function.
        let unixtime = parseInt((new Date(dealData.date).getTime() / 1000).toFixed(0))
        let options = {
            abi: constant.contractABI,
            contractAddress: constant.contractAddress,
            functionName: "createNewDeal",
            params: {
                sender: dealData.sender, 
                receiver: dealData.receiver,
                priceUSD: Moralis.Units.ETH(dealData.price), 
                symbol: dealData.token, 
                dateDue: unixtime
            }
        }

        //await contractProcessor.fetch({params: options, onSuccess: console.log("New Deal Created!")})


    return (
        <Center py={6}>
        <Box
        padding={'50px'}
        maxW={'700px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}>
                <Stack spacing={3}>
                    <Heading>Create New Deal</Heading>
                    <FormControl>
                        <FormLabel htmlFor='sender'>sender address</FormLabel>
                        <Input type="text" variant='filled' placeholder='sender address (0x....)' size='sm' onChange={handleChange} name="sender" />
                        <FormLabel htmlFor='receiver'>receiver address</FormLabel>
                        <Input type="text" variant='filled' placeholder='receiver address (0x....)' size='sm' onChange={handleChange} name="receiver" />
                        <FormLabel htmlFor='price'>price in USD</FormLabel>
                        <Input type="text" variant='filled' placeholder='price in USD' size='sm' onChange={handleChange} name="price" />
                        <FormLabel htmlFor='token'>token symbol</FormLabel>
                        <Input type="text" variant='filled' placeholder='e.g. "ETH"' size='sm' onChange={handleChange} name="token" />
                        <FormLabel htmlFor='date'>Date for Payment</FormLabel>
                        <DatePicker
                            name='date' 
                            selected={dealData.date} 
                            onChange={handleDate} 
                            dateFormat='dd/MM/yyyy'
                            placeholderText='pick a date'
                        />
                    </FormControl>
                    <Button onClick={() => fetch({params: options})} disabled={isFetching}>Submit</Button>
                </Stack>
                </Box>
                </Center>
    )
}