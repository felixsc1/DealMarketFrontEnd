import { useMoralisQuery } from "react-moralis"
import { Button } from '@chakra-ui/react'
import { React, useEffect, useState } from 'react'

export default function Query({queryToParent, selectedDeal}) {

    // console.log(selectedDeal)

    const {data, error, isLoading } = useMoralisQuery(
        "Deal",
        query =>
            query
                .equalTo("dealId_decimal", selectedDeal))

    const [dealData, setDealData] = useState()

    useEffect(() => {
        setDealData(data)
        },[data])

    // console.log(dealData)
    
    return (
        <div>
            <Button margin={'10px'} onClick={() => queryToParent(dealData)}>Show Deals</Button>
        </div>
    )


}