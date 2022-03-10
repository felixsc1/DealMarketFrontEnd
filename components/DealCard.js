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

  export default function DealCard(props) {
   
    return (
      <Center py={6}>
        <Box
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
            <Text fontSize={'md'}>{getDescription(parseInt(props.dealdata.attributes.dealId))}</Text>
            <Text fontSize={'xs'}>sender: {props.dealdata.attributes.sender}</Text>
            <Text fontSize={'xs'}>receiver: {props.dealdata.attributes.receiver}</Text>
            <Text fontSize={'xs'}>price (USD): {props.dealdata.attributes.priceUSD/10**18}</Text>
            <Text fontSize={'xs'}>token: {props.dealdata.attributes.symbol}</Text>
          </Stack>
          {/* <Badge margin={2} colorScheme='green'>Active</Badge> */}
          <GetDealStatus dealId={props.dealdata.attributes.dealId} />
          <Stack mt={2} direction={'row'} spacing={4}>
            {props.user === 'lawyer' && <CancelFinalize dealId={props.dealdata.attributes.dealId}/>}
            {props.user === 'customer' && <Pay dealId={props.dealdata.attributes.dealId}/>}
          </Stack>
        </Box>
      </Center>
    );
  }