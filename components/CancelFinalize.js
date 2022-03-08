import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import * as constant from '../contracts/MarketPlaceContract'
import { Button } from '@chakra-ui/react'
import Ma from './Ma'
import { useEffect } from "react"

export default function CancelFinalize(props) { 

    const { Moralis } = useMoralis()
    // useEffect(() => {
    //     Moralis.enableWeb3()
    // },[])
    
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();

    let optionsCancel = {
        abi: constant.contractABI,
        contractAddress: constant.contractAddress,
        functionName: "cancelDeal",
        params: {
            dealId: props.dealId, 
        }
    }

    let optionsFinalize = {
      abi: constant.contractABI,
      contractAddress: constant.contractAddress,
      functionName: "finalizeDeal",
      params: {
          dealId: props.dealId, 
      }
  }

    return (
        <>
        <Button onClick={() => fetch({params: optionsCancel})} disabled={isFetching}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Cancel
        </Button>
        <Button onClick={() => fetch({params: optionsFinalize})} disabled={isFetching}
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
              }}>Finalize</Button>
        {/* {error && <>{JSON.stringify(error)}</>} */}
        {error && <Ma errMessage={error}/>}
        </>
    )

}

