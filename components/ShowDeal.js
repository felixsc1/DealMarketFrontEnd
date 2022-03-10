import { React } from 'react';
import DealCard from "./DealCard";

// <pre>{JSON.stringify(data, null, 2)}</pre>

export default function ShowDeal(props) {

    // for the lawyer we want to display all deals, for the customer only the selected deal.
    // const { data, error, isLoading } = useMoralisQuery("Deal")
    
    // const { data, error, isLoading } = useMoralisQuery("Deal", query =>
    //     query
    //         .equalTo("dealId_decimal", props.selectDeal))


    //console.log(data[0])


    // didn't work with using "data" directly -> card attributes were empty.
    // I suppose useEffect ensures that components get rerendered when data fetch is complete.
    // const [dealData, setDealData] = useState()
    // useEffect(() => {
    //     setDealData(data)
    //  },[data])

    //console.log(dealData)


    return (
        <div>
            {props.dealData && props.dealData.map((item, index) => 
                    <DealCard dealdata={item} key={index} user={props.user}/>
            )}
            
        </div>
    )

}