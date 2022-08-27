// DISPLAY ALL MODELS COMPONENT (recycled)
// API CALLS [ fetchAll ]


import React, { useEffect, useState } from 'react'
import { fetchAll } from "../api/renderAll";


const DisplayModels = ({ url }) => {

    //STATES
    const [items, setItems] = useState([]);

    // FETCH API 
    const fetch_data = () => {
        const handle_fetchAll = async () => {
            try {
                const res = await fetchAll(url)
                setItems(res.data)
            } catch (error) {
                console.log("error message: ", error);
            }
        };
        handle_fetchAll();
    }


    // ON PAGE RENDER
    useEffect(() => {
        fetch_data()
    }, []);


    return (
        <>
            <h1>{url}</h1>
            <div>
                {
                    items.length > 0 ? items.map((item) => (
                        <>
                            <div key={item['id']} className="fetch_mapped_item">
                                {Object.keys(item).map(a => <p> <b> {`${a}`} </b>  {` : ${item[a]}`}</p>)}
                            </div>
                            <hr />
                        </>
                    ))
                        : <h2>"No items in the database "</h2>
                }
            </div>
        </>
    )
}

export default DisplayModels