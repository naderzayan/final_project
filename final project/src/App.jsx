import "./style/components style/nav.scss";
import "./style/components style/header.scss";
import "./style/homePage/headerProduct.scss";
import "./style/homePage/secesionOne.scss";
import "./style/homePage/postCard.scss";
import "./style/homePage/topBrands.scss";
import "./style/homePage/secesionTwo.scss";
import "./style/homePage/secesionThree.scss";
import "./style/homePage/mostViewed.scss";
import "./style/homePage/flagSecesion.scss";
import "./style/components style/footer.scss";
import "./style/components style/lastFooter.scss";
import "./style/wishlist/wishlist.scss";
import "./style/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import WishList from "./pages/WishList";
import Applayout from "./components/applayout";
import Login from "./components/Login";
import Watchbuying from './component/Watchbuying'
import {CounterProvider} from'./component/CounterContextt'
import Thecart from './component/Thecart'

export default function App() {
    const Routing = createBrowserRouter([
        {path: "/", element: <Applayout />, children: [
        { path: "", element: <HomePage /> },
        { path: "home", element: <HomePage /> },
        { path: "shop", element: <Shop /> },
        { path: "blog", element: <Blog /> },
        { path: "about us", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
        { path: "wishlist", element: <WishList /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <h1>404 not found</h1> },
               {path:"posts/:id/:amount",element:<Watchbuying/>},
                {
                    path:"cart",element:<Thecart/>
                }

    ]}
      
    ]);
    return (
         <div>
        <CounterProvider >
            
        <RouterProvider router={Routing} />
        </CounterProvider>
       
       

  
   
   </div>
    

    );
}
