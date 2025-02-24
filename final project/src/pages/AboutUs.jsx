import "../style/about us/aboutUs.scss"
import { FcCheckmark } from "react-icons/fc";

export default function AboutUs() {
  return (
      <div>
          <br />
          <div className="para">
              <p>Home - About Us</p>
          </div>
          <div className="secesion_one">
              <div className="p1">
                  <p className="hp">OUR HISTORY</p>
                  <h1>Creative and renovate fashion trends</h1>
                  <p>
                      Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically
                      visualize customer directed convergence without revolutionary ROI.
                  </p>
                  <div className="srvay">
                      <div>
                          <span>12</span>
                          <p>Years Experience</p>
                      </div>
                      <div>
                          <span>20K</span>
                          <p>Happy Customers</p>
                      </div>
                      <div>
                          <span>20K</span>
                          <p>Happy Customers</p>
                      </div>
                  </div>
              </div>
              <div className="p2">
                  <img src="about_us_img_111.png" alt="" />
              </div>
          </div>
          <br />
          <div className="secesion_two">
              <div>
                  <img src="about_us_img_21.png" alt="" />
              </div>
              <div>
                  <p className="hp">Our vision</p>
                  <h1>We are marketpress</h1>
                  <p>Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI</p>
                  <div className="features">
                      <p>
                          <FcCheckmark /> Credibly innovate granular internal
                      </p>
                      <p>
                          <FcCheckmark /> Grantedly underconstructions reloaded
                      </p>
                      <p>
                          <FcCheckmark /> Interactively procrastinate high-payoff
                      </p>
                      <p>
                          <FcCheckmark /> Completely synergize resource taxing relationships
                      </p>
                  </div>
              </div>
          </div>
          <br />
          <div className="secesion_three">
              <p className="hp">ANGELS</p>
              <h1>Meet with our Team</h1>
              <div className="our_team">
                  <div>
                      <img src="2025-02-10-1.png" alt="" />
                      <p className="hp2">FOUNDER</p>
                      <h3>Tony Williamson</h3>
                  </div>
                  <div>
                      <img src="2025-02-10-2.png" alt="" />
                      <p className="hp2">CEO</p>
                      <h3>William Hanah</h3>
                  </div>
                  <div>
                      <img src="2025-02-10-3.png" alt="" />
                      <p className="hp2">ADVISOR</p>
                      <h3>JInglo Jelian</h3>
                  </div>
                  <div>
                      <img src="2025-02-10-4.png" alt="" />
                      <p className="hp2">DESIGNER</p>
                      <h3>Jony Smith</h3>
                  </div>
              </div>
          </div>
          <div className="secesion_four">
              <div className="secesion_four_p1">
                  <h1>Newsletter & Get Updates</h1>
                  <p>Sign up for our newsletter to get up-to-date from us</p>
              </div>
              <div className="secesion_four_p2">
                  <input type="text" name="" id="" placeholder="Enter Your Mail Here ......" className="input" />
                  <button type="submit" className="button">
                      SUBMIT
                  </button>
              </div>
          </div>
      </div>
  );
}
