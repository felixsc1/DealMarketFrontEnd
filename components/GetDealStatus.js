import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import * as constant from '../contracts/MarketPlaceContract'
import { useEffect, useState } from "react"
import { Badge } from '@chakra-ui/react'

export default function GetDealStatus({dealId}) { 
   
    const { Moralis } = useMoralis()

    let options = {
            abi: constant.contractABI,
            contractAddress: constant.contractAddress,
            functionName: "showDeal",
            params: {
                dealId: dealId, 
            }
        }

    // const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
        
    const [dealStatus, setDealStatus] = useState(0)
        
    const fetchDeal = async () => {
        let data = await Moralis.executeFunction(options)
        setDealStatus(data.status)
        // console.log(dealStatus)
    }




    let badgeText
    let badgeColor

        if (dealStatus === 0) {
            badgeText = 'OPEN'
            badgeColor= 'purple'
        } else if (dealStatus === 1) {
            badgeText = 'PAID'
            badgeColor = 'green'
        } else if (dealStatus === 2) {
            badgeText = 'COMPLETED'
            badgeColor = 'gray'
        } else if (dealStatus === 3) {
            badgeText = 'CANCELLED'
            badgeColor = 'red'
        }

    useEffect( ()=> {
        fetchDeal()
    }, [])

    return (
        <>
        <Badge colorScheme={badgeColor}>{badgeText}</Badge>
        {/* <button margin={'20px'} onClick={() => fetch({ params: options })} disabled={isFetching}>Fetch data</button> */}
        {/* <pre>{JSON.stringify(dealStatus,null,2)}</pre> */}
        </>
    )

}

