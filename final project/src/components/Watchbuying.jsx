import React from 'react'
import { useParams } from 'react-router-dom'
import { watchdata } from './Homedata'
import Drawbuy from './Drawbuy'



export default function () {
const {id}=useParams()
const arr2=[id]

    
  const myclock= watchdata.filter(function(watchdata){
    return watchdata.price==id
  })
  console.log(myclock)
      
    



  return (
    <div>

   {myclock.map((ele)=> 
       (    <Drawbuy key={ele.id} image={ele.image}  title={ele.title} image2={ele.image2} price={ele.price}/> )
         )}
         



      
      













    </div>
  )
}
