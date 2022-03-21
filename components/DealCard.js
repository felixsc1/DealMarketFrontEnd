import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue
  } from '@chakra-ui/react';
import Pay from './Pay'
import GetDealStatus from '../components/GetDealStatus'
import CancelFinalize from './CancelFinalize'
import getDescription from "./GetDescription"
import {useState, useEffect} from 'react'
import * as constant from '../contracts/MarketPlaceContract'
import { useMoralis } from "react-moralis"


export default function DealCard(props) {

  const { Moralis } = useMoralis()
  let options = {
          abi: constant.contractABI,
          contractAddress: constant.contractAddress,
          functionName: "showDeal",
          params: {
              dealId: props.dealdata.attributes.dealId, 
          }
      }
      
  const [dealStatus, setDealStatus] = useState(1)
  // const [doRender, setDoRender] = useState(true)
  const [descriptionText, setDescriptionText] = useState()
  let _output = getDescription(parseInt(props.dealdata.attributes.dealId))  

  const fetchDeal = async () => {
      // await Moralis.enableWeb3()
      let data = await Moralis.executeFunction(options)
      setDealStatus(data.status)
  }

  const [renderComponent, setRenderComponent] = useState(true)
  
  useEffect( async ()=> {
      // await Moralis.enableWeb3()
      fetchDeal()
      setDescriptionText(_output)

      if (dealStatus === 0) {setRenderComponent(props.doRender.open)}
      if (dealStatus === 1) {setRenderComponent(props.doRender.paid)}
      if (dealStatus === 2) {setRenderComponent(props.doRender.complete)}
      if (dealStatus === 3) {setRenderComponent(props.doRender.cancelled)}
  }, [props.doRender])
    
  
  // console.log(props.doRender.open)
     
    return (
      <Center py={6}>
        { renderComponent && <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'left'}>
          <Heading fontSize={'xl'} align={'center'} fontFamily={'body'}>
            Deal #{props.dealdata.attributes.dealId}
          </Heading>
          <Text>
          </Text>
  
          <Stack align={'left'} direction={'column'} mt={6}>
            <Text fontSize={'md'}>{descriptionText}</Text>
            <Text fontSize={'xs'}>sender: {props.dealdata.attributes.sender}</Text>
            <Text fontSize={'xs'}>receiver: {props.dealdata.attributes.receiver}</Text>
            <Text fontSize={'xs'}>price (USD): {props.dealdata.attributes.priceUSD/10**18}</Text>
            <Text fontSize={'xs'}>token: {props.dealdata.attributes.symbol}</Text>
          </Stack>
          <GetDealStatus dealId={props.dealdata.attributes.dealId} />
          <Stack mt={2} direction={'row'} spacing={4}>
            {props.user === 'lawyer' && <CancelFinalize dealId={props.dealdata.attributes.dealId}/>}
            {props.user === 'customer' && <Pay dealId={props.dealdata.attributes.dealId} dealStatus={dealStatus}/>}
          </Stack>
        </Box>}
        <></>
      </Center>
    );
  }