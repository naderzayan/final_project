import React, {useState ,useRef}from 'react'
import { Link } from 'react-router-dom'
import Watchbuying from './Watchbuying'
import { watchdata } from './Homedata'
import Thecart from './Thecart';





export default function watchapi({image,title, price,image2,yellow,myq}) {
  

  
  
  const store = () => {
    const newItem = {
      title: title,
      price: price,
      image: image,
      quantity:myq
      
      
      
      
    };
   
 

    // Get existing items from localStorage or initialize an empty array
    // let items = JSON.parse(localStorage.getItem("savedItems")) || [];
     let items=(JSON.parse(localStorage.getItem("savedItems")) || [])
     
  
  
  
    

    // Check if item already exists based on title
    const exists = items.some((item) => item.title === newItem.title);

    if (!exists) {
      items.push(newItem); // Add new item
      localStorage.setItem("savedItems", JSON.stringify(items)); // Save updated array
      alert("Item saved: " + JSON.stringify(newItem));
    } else {
      alert("Item already exists!");
    }
  

  };

  // const [Quantity, setQuantity] = useState(0); // Ensure state is defined

  // const clicker = () => {
  //   const key =yellow// Fix missing quotes
  
  //   watchdata.filter((ele) =>
  //      ele.id==yellow? // Ensure ele is a string
  //       setQuantity(prevQuantity => prevQuantity + 1):Quantity)
      
      
      
      
      
      

    
  
  //   const Cart = () => {
  //     const [cart, setCart] = useState([]);
    
  //     // Load cart from localStorage on mount
  //     useEffect(() => {
  //       const storedCart = JSON.parse(localStorage.getItem("savedItems")) || [];
  //       setCart(storedCart);
  //     }, []);
    
  //     // Function to update quantity
  //     const updateQuantity = (myq, Quantity) => {
  //       const updatedCart = cart.map((item) =>
  //        item.id == myq ?  Quantity.push(storedCart):storedCart
  //       );
    
  //       setCart(updatedCart);
  //       localStorage.setItem("savedItems", JSON.stringify(updatedCart));
  //     }
    
  //   }
  // }
  
 
  
   // Function to increment quantity of a specific item in localStorage
const que =()=> {
  // Get cart from localStorage (or initialize an empty array)
  let cart = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Find the item in the cart
  let itemIndex = cart.findIndex(item => item.price === price);

  if (itemIndex !== -1) {
      // If item exists, increment quantity
      cart[itemIndex].quantity += 1;
  } else {
      // If item does not exist, add it with quantity 1
      cart.push({ id: product, quantity: 1 });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem("savedItems", JSON.stringify(cart));

  
}



// Example: Call function when user clicks an increment button

   // Pass the product ID dynamically

  
  
  
  


 
 

 

  


  return (
    <div className=' myapis'>
      
                  <Link to ={"/cart"}> My Cart</Link>
                  
      


     
<div   className='watchimage'>
  
  

      
      

<Link to= {`/posts/${price}/${title}`}>

      
      <div className='clockk'>
        


<div>{title}</div>
<div>{price}</div>

</div>
</Link>
<div>

<button price={price} image={image} title={title}   onClick={store} > add to cart</button>
<div price={price}  onClick={que}>++</div>




</div><img src={ ` ${image} ` } alt="" />





</div>

<div>





</div>





    </div>
  )
}
