import { CiDeliveryTruck } from "react-icons/ci";
import { IoEarthSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <div className="header">
          <div className="head">
              <div><CiDeliveryTruck /> free Delivery</div>
              <hr />
              <div><IoEarthSharp /> Returns Policy</div>
              <hr />
              <div className="iconOfLinks">
                  Follow Us
                  <a href="https://www.facebook.com/nader.zayan.144/" target="_blank"><FaFacebook /></a>
                  <a href="https://x.com/NaderAhmed409?s=09" target="_blank"><FaSquareXTwitter /></a>
                  <a href="https://www.instagram.com/naderahmedmohamedhassan?igsh=MW5tMzhtbzl6MHowdw==" target="_blank"><BsInstagram /></a>
                  <a href="https://pin.it/4AZN67b8u" target="_blank"><FaPinterestP /></a>
                  </div>
          </div>
          <div>
              <Link to={"/Login"}>login</Link>
          </div>
      </div>
  );
}
