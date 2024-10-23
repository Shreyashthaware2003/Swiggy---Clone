import { React, useState, useEffect } from 'react';
import Card from './Card';

function OnlineDelivery() {

    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch("/restaurantChains.json");
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )
    return (
        <div className='max-w-[1200px] mx-auto mb-4 px-2 ' >
            <div className='my-5 flex items-center justify-between'>
                <div className='text-[25px] font-semibold'>Restaurants with online food delivery in Maharashtra</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d, i) => {
                            return <Card {...d} key={i} />
                        })
                }
            </div>
        </div>
    )
}

export default OnlineDelivery
