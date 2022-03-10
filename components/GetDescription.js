import { useEffect, useState } from 'react'
import { useMoralis } from "react-moralis"


function getDescription(dealId) {

    const { Moralis } = useMoralis()


    const [item, setItem] = useState()

    async function queryDB(dealId) {
        const Deals = Moralis.Object.extend("Deal")
        const query = new Moralis.Query(Deals)
        query.equalTo("dealId_decimal", dealId)
        const results = await query.find()
        // console.log(results[0].id)
        return results
    }

    useEffect(async ()=> {
        const _item = await queryDB(dealId)
        setItem(_item[0].attributes.description)
        // console.log(item[0].attributes.description)
    },[])

    return item

}

 export default getDescription