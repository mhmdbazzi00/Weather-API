import React, { useEffect, useState } from 'react'

function FetchData(){
    const [data, setData] = useState([])

    useEffect(()=>{
fetch('FakeWeather.json')
.then(data => data.json())
.then(data => setData(data))
.catch(err => console.log(err))
    }, [])
    return (
        <div>
            <table>
         <ul>
            {data.map((list, index) =>(
               <li key={index}>{list.id} | {list.name} </li>
            ))}
            </ul>       
            </table>
        </div>
    )
}
export default FetchData