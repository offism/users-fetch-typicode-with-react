import './App.scss';
import FetchData from './module/getData.js'
import {useEffect, useState} from 'react'

function App() {

   let [data, setData] = useState([])

   useEffect(()=>{
     ;(async ()=>{
       let datas = await FetchData.getData(data)
       setData(datas)
    })()
   }
  )

 return (
  <main className="main">
     <h1 className="main__title">Todos</h1>
     <ul>
       {
        data.map((item,index)=>{
          return(
         <li key={index}>
            <strong>Name: {item.name}</strong>
            <u>{item.email}</u>
            <br/>
            <hr/>
            <span>City: {item.address.city} | </span>
            <span>{item.address.street}</span>
         </li>
            )
        })
       }
     </ul>
  </main>
  );
}

export default App;
