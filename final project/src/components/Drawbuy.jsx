import{ React,  useRef,useContext,useState } from 'react'

import Homepage from './Homepage'
import Navbar from './Navbar'
import Thecart from './Thecart'

import Watchapi from './watchapi'
import { CounterContext } from './CounterContextt'












export default function Drawbuy({ image, title, price, image2 }) {





let[ imageset,setimageset]=useState(0)


  const myclick = () => {
    const input = document.getElementById('5')
    const light = document.getElementById('6')
    const lightt = document.getElementById('7')
    input.style.display = "none";
    light.style.display = 'block';
    lightt.style.display = 'none';
  }
  const myclick2 = () => {
    const input = document.getElementById('5')
    const lightt = document.getElementById('7')
    const light = document.getElementById('6')
    input.style.display = "none";
    lightt.style.display = 'block';
    light.style.display = 'none';


  }




  
  const {myCounter,setmyCounter}= useContext(CounterContext);

  
  


 


   

  

 
   





  return (




    <div>
   

      <div>
        <Homepage  />
      </div>
<div className='mymain'>

      <div className='firstdiv'>
        
        
        <div className='bigclock'>

        <div id='7' className='hide'>
          <img src={` ${image} `} alt="" />
        
        </div>

        <div className='hideme' id='6'>
          <img src={` ${image2} `} alt="" />
        </div>

        <div id="5">
          <img src={` ${image} `} alt="" />
          
        </div>
        </div>

      




<div className='miniclocks'>

        <div onClick={myclick} id="1" >
          <img src={` ${image2} `} alt="" />
          
          
          


        </div>
        <div id="2 " onClick={myclick2}  >
          <img src={` ${image} `} alt="" />


        </div>
        <div id="3">

          <img src={` ${image} `} alt="" />
          {myCounter}

        </div>
        </div>
      </div>






      <div className='seconddiv'>
        <div className='mycategory'>

          Category:
          {title}

        </div>
        <div className='mytext'>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
         fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
         Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </div>
        <div className='myprice'> 
          {price}
        </div>

      
<div className='mycart'>
  <div className='minusplus'>
        <div className='minus'><button >-</button></div>
        <div className='mycounter'>
  
      
   
          
        </div>
        <div className='plus'>
          <button onClick={()=>{ setmyCounter(myCounter=>myCounter+1),setimageset([image])}}> +</button></div>
        </div>
        <button className='cartbutton'  >
          
       

add to cart




</button>


  

</div>
       

      </div>
      </div>


      <Thecart  image={imageset}  counter={myCounter} />

    </div>







  )
}

