import React, { useEffect, useState } from 'react'

function FetchData(){
    const [data, setData] = useState([])

    useEffect(()=>{
fetch('https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
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