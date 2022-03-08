import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import * as constant from '../contracts/MarketPlaceContract'
import * as tokenconstant from '../contracts/Tokens'
import { Button } from '@chakra-ui/react'
import Ma from './Ma'
import { useEffect } from "react"

export default function Pay(props) { 

    const { Moralis } = useMoralis()
    useEffect(() => {
        Moralis.enableWeb3()
    },[])
    
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();

    let optionsPay = {
        abi: constant.contractABI,
        contractAddress: constant.contractAddress,
        functionName: "payDeal",
        params: {
            dealId: props.dealId, 
        }
    }
    console.log(constant.contractAddress)
    console.log(tokenconstant.autiCoinAddress)

    let optionsApprove = {
        abi: tokenconstant.autiCoinABI,
        contractAddress: tokenconstant.autiCoinAddress,
        functionName: "approve",
        params: {
            spender: constant.contractAddress,
            amount: Moralis.Units.ETH(10000000000) // just some really high number. todo: set it to the actual price
        }
    }

    return (
        <>
        <Button onClick={() => fetch({params: optionsApprove})} disabled={isFetching}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Approve Token
        </Button>
        <Button onClick={() => fetch({params: optionsPay})} disabled={isFetching}
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
        {error && <Ma errMessage={error}/>}
        </>
    )

}

