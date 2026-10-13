import  React from 'react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {


  const [userData,setUserData] = useState([])

  const  getData = async function () {
const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=15')
  const data = response.data;
setUserData(data)
console.log(data)
  }

useEffect(function(){
   getData()
},[])

 
let printUserData = 'No user Available'

if(userData.length > 0) {
  printUserData = userData.map (function(elem,idx) {
    return <div key = {idx}> 
    <a href =  {  elem.url} target = '_blank'> 
      <div>

      <img className='h-40' src = {elem.download_url } alt = "" /> 
    </div>
    <h2> {elem.author}</h2>
    </a>
          </div>

  })
}

  return ( 
    <div className='bg-black h-full text-white'>
      
        <div>
{printUserData}
      </div>


      <div className='flex justify-center items-center p-4'>
        <button className='bg-amber-400 text-black rounded px-4 py-2'> PREV</button>
        
      </div>
    </div>
  )
}

export default App
