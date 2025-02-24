import React, {useEffect,  useState} from 'react'
import { shopdata } from './Homedata'
import Smallcatergory from './Smallcatergory'
import Myinput from './Myinput'

export default function Shopdata( ) {

  
  
     const [searchposts,setsearchposts]=useState(shopdata)
      const [searchval,setsearchval]=useState("")
      useEffect(()=>{
         const filterposts= shopdata.filter  ((ele)=>ele.title. toLowerCase() .includes(searchval.toLowerCase())
      )
      setsearchposts(filterposts)}
       
      ,[searchval])
  
  
  
 

  
  
  return (
    <div className='shopp'>

                  <div className='searchinput'>
                  <Myinput setsearchval={setsearchval}/>
      
      
      
            </div>
    {searchposts.map((ele,index)=> 
       ( <Smallcatergory key={ele.id} title={ele.title}  amount={ele.amount}/>))}
      </div>
          
       
  )
}
