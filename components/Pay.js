import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import * as constant from '../contracts/MarketPlaceContract'
import * as tokenconstant from '../contracts/Tokens'
import { Button, VStack } from '@chakra-ui/react'
import Ma from './Ma'
import { useEffect, useState } from "react"

export default function Pay(props) { 

    const { Moralis } = useMoralis()

    const [msgValue, setMsgValue] = useState(0)

    useEffect(() => {
      console.log(props.tokenAmount)
        if (props.symbol == "ETH") {
          setMsgValue(props.tokenAmount)
        }
    },[])
    
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
    
    if (props.symbol == "ETH") {
      let optionsPay = {
          abi: constant.contractABI,
          contractAddress: constant.contractAddress,
          functionName: "payDeal",
          params: {
              dealId: props.dealId, 
          },
          msgValue: msgValue
      }} else {
        let optionsPay = {
          abi: constant.contractABI,
          contractAddress: constant.contractAddress,
          functionName: "payDeal",
          params: {
              dealId: props.dealId, 
          }
      }}

    let optionsApprove = {
        abi: tokenconstant.autiCoinABI,
        contractAddress: tokenconstant.autiCoinAddress,
        functionName: "approve",
        params: {
            spender: constant.contractAddress,
            amount: Moralis.Units.ETH(10000000000) // just some really high number. could use props.tokenamount
        }
    }


    return (
        <>
        {props.symbol != "ETH" && <Button onClick={() => fetch({params: optionsApprove})} disabled={props.dealStatus != 0}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Approve Token
        </Button>}
        <Button onClick={() => fetch({params: optionsPay})} disabled={props.dealStatus != 0}
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
              }}>Pay</Button>
          
        {/* {error && <>{JSON.stringify(error)}</>} */}
        {error && <Ma errMessage={error.message}/>}
        </>
    )

}

