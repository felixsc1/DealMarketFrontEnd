import { React } from 'react';
import DealCard from "./DealCard";

// <pre>{JSON.stringify(data, null, 2)}</pre>

export default function ShowDeal(props) {


    return (
        <div>
            {props.dealData && props.dealData.
                map((item, index) => 
                    <DealCard dealdata={item} key={index} user={props.user} doRender={props.doRender}/>
            )}
            
        </div>
    )

}