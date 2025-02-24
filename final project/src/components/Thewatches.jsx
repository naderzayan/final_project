import React from 'react'
import Watchapi from './watchapi'
import { watchdata } from './Homedata'

export default function thewatches() {

 
  
  return (
    <div className='boxy2'>

    
    {watchdata.map((ele,index)=> 
     ( <Watchapi yellow={ele.id} image={ele.image}  title={ele.title} price={ele.price} image2={ele.image2} myq={ele.quantity}/>)
       )}
       </div>
    
  )
}

