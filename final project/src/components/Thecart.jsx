import React, {useState ,useEffect}from 'react'
import { Link } from 'react-router-dom';
import Cartdraw from './Cartdraw';

export default function Thecart() {



    const [val, setval] = useState([]);
    
    
    let stored=[]

    useEffect(() => {
      const stored = localStorage.getItem("savedItems");
      if (stored) {
        setval(JSON.parse(stored));
        console.log(stored)
      }
  

    },  []);
   
 

   



  return (
    <div>
    



    {val.map((ele,index)=> 
     ( <Cartdraw  image={ele.image}  title={ele.title} price={ele.price}  quan={ele.quantity}/>)
       )} 

         
        
    </div>
  )
}
