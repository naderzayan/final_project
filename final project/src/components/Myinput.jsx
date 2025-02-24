import React from 'react'

export default function Myinput({setsearchval}) {
  return (
    <div> 
        <input type="text" placeholder='search..'  onChange={(e) =>setsearchval(e.target.value)       }/>









</div>
  )
}
