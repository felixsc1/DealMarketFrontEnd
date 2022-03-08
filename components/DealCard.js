import {
    Heading,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import Pay from './Pay'
import GetDealStatus from '../components/GetDealStatus'
import CancelFinalize from './CancelFinalize'


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
            Deal ID: {props.dealdata.attributes.dealId}
          </Heading>
          <Text>
          </Text>
  
          <Stack align={'left'} direction={'column'} mt={6}>
            <Text fontSize={'xs'}>sender: {props.dealdata.attributes.sender}</Text>
            <Text fontSize={'xs'}>receiver: {props.dealdata.attributes.receiver}</Text>
            <Text fontSize={'xs'}>price (USD): {props.dealdata.attributes.priceUSD/10**18}</Text>
            <Text fontSize={'xs'}>token: {props.dealdata.attributes.symbol}</Text>
          </Stack>
          {/* <Badge margin={2} colorScheme='green'>Active</Badge> */}
          <GetDealStatus dealId={props.dealdata.attributes.dealId} />
          <Stack mt={2} direction={'row'} spacing={4}>
            {/* {props.user === 'lawyer' && <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Cancel
            </Button>}
            {props.user === 'lawyer' && <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Finalize
            </Button>} */}
            {props.user === 'lawyer' && <CancelFinalize dealId={props.dealdata.attributes.dealId}/>}
            {props.user === 'customer' && <Pay dealId={props.dealdata.attributes.dealId}/>}
          </Stack>
        </Box>
      </Center>
    );
  }