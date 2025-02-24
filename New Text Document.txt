import "../style/shop/shop.scss"
import { FaStar } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Shop() {
  return (
      <div>
          <br />
          <div className="para">
              <p>Home - Shop</p>
          </div>
          <br />
          <div className="headOfPage">
              <div>
                  <div className="filter">
                      <p>
                          <span>|</span> Filter:
                      </p>
                      <p>Price: $10 - $700</p>
                      <button>Filter</button>
                  </div>
                  <div className="contactOfCard">
                      <h4>
                          <span>|</span> Products By Rating
                      </h4>
                      <div>
                          <p>LED Television</p>
                          <div>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <del>$670.00</del> $569.00
                          </div>
                          <hr />
                      </div>
                      <div>
                          <p>LED Television</p>
                          <div>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <del>$670.00</del> $569.00
                          </div>
                          <hr />
                      </div>
                      <div>
                          <p>LED Television</p>
                          <div>
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <del>$670.00</del> $569.00
                          </div>
                      </div>
                  </div>
                  <div className="Product categories">
                      <h4>
                          <span>|</span> Product categories
                      </h4>
                      <p className="Product_p">3d Glass (2)</p>
                      <hr />
                      <p className="Product_p">Bluetooth (1)</p>
                      <hr />
                      <p className="Product_p">Camera (6)</p>
                      <hr />
                      <p className="Product_p">Drone (2)</p>
                      <hr />
                      <p className="Product_p">Future Product (1)</p>
                      <hr />
                      <p className="Product_p">Gamepad (1)</p>
                      <hr />
                      <p className="Product_p">Google Glass (1)</p>
                      <hr />
                      <p className="Product_p">Headphone (2)</p>
                      <hr />
                      <p className="Product_p">Laptop (3)</p>
                      <hr />
                      <p className="Product_p">LED Television (3)</p>
                      <hr />
                      <p className="Product_p">Light (1)</p>
                      <hr />
                      <p className="Product_p">Mobile (1)</p>
                      <hr />
                      <p className="Product_p">Portable (2)</p>
                      <hr />
                      <p className="Product_p">Projector (1)</p>
                      <hr />
                      <p className="Product_p">Samsung TV (2)</p>
                      <hr />
                      <p className="Product_p">Speaker (5)</p>
                      <hr />
                      <p className="Product_p">Watch (4)</p>
                      <hr />
                      <p className="Product_p">Wireless (1)</p>
                      <hr />
                      <br />
                  </div>
                  <div className="poster">
                      <img src="shop_offer_banner1.png" alt="" />
                  </div>
              </div>
              <div>
                  <div className="Nav_tab">
                      <h3>Shop</h3>
                      <dev className="Sort_viwe">
                          <p>Sort by</p>
                          <p>Viwe</p>
                          <BsFillGrid3X3GapFill />
                          <FaBars />
                      </dev>
                  </div>
              </div>
          </div>
      </div>
  );
}
