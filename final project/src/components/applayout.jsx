
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import CartList from "./CartList"
import Footer from "../components/Footer"
import LastFooter from "../components/LastFooter"
import { useState } from "react"
import { Outlet } from "react-router-dom"
export default function Applayout() {
      const [showCartList ,setShowCartList] = useState(false)
    
    return (
        <>
            <Header />
            <hr />
            <Navbar setShowCartList={setShowCartList} />
            <CartList setShowCartList={setShowCartList} showCartList={showCartList} />
            <hr />

            <Outlet />
            <Footer />
            <LastFooter />
        </>
    );
}
