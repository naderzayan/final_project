import React, { useRef} from 'react'

import Homepage from './component/Homepage'
import Shopdata from './component/Shopdata'
import Thewatches from './component/Thewatches'
import { FaStar } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";





export default function Shop() {




  return (
    <div >

    
      <div> <Homepage /></div>
      <div className='homeshop '> Home - Shop</div>
    
      <div className='needjustify'>

        <div className='thestart'>
          <div className='filterbox'>
            <div className='borderorange'>
              <div className='border'></div>


<div>
Filter:
</div>
             
              </div>
            <div className='logo'>logoooooooooooo</div>
            <div>price </div>




            <button>filter</button>
           
          </div>

          <div className='rateapi'>
            <div>products by rating</div>


            <div className='myphoto'>title  <img src="src\mini1.jpg" alt="" /></div>
            <div> logooo  price</div>











          </div>
          <div className='rateapi'>
            <div>products by rating</div>


            <div className='myphoto'>title  <img src="src\minni2.jpg" alt="" /></div>
            <div> logooo  price</div>











          </div>
          <div className='rateapi'>
            <div>products by rating</div>


            <div className='myphoto'>title  <img src="src\mini3.jpg" alt="" /></div>
            <div> logooo  price</div>











          </div>
          <div className='thecatt'>
            <Shopdata />
          </div>

          <div className='rateapi banpic'>


            <img src="\src\banner.png" />




          </div>




        </div>


        <div className='mywatches'>

          <div className='shop-bar'>

            <div className='alone'>Shop</div>
            <div className='sort'>sort by sorting</div>
            <div className='mysvg'>
              svgg

            </div>


          </div>

          <Thewatches />
        </div>







      </div>












    </div>

  )
}

