import { CiLocationOn } from "react-icons/ci";
import { WiDirectionUp } from "react-icons/wi";


export default function Footer() {
    function scrollfunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="footer">
            <div>
                <p>Got Question? Call us 24/7</p>
                <h3>[80] 1017 197</h3>
                <p>17 Princess Road, London, Greater London</p>
                <p>NW1 8JR, UK</p>
                <br />
                <br />
                <button className="btn">
                    <CiLocationOn />
                    <a
                        href="https://www.google.com/maps/place/221B+Baker+St,+London+NW1+6XE,+UK/@51.523767,-0.1585557,17z/data=!3m1!4b1!4m6!3m5!1s0x48761acf33628211:0x445d7677a88322e1!8m2!3d51.523767!4d-0.1585557!16s%2Fg%2F11bw4hsx_m?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        className="map">
                        View On Map
                    </a>
                </button>
            </div>
            <div>
                <p>We Using</p>
                <h3>Safe Payments</h3>
                <p>Secured by:</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <p className="qlos">Support Center</p>
                <p className="qlos">Term & Conditions</p>
                <p className="qlos">Shipping</p>
                <p className="qlos">Privacy Policy</p>
                <p className="qlos">Help</p>
                <p className="qlos">Products Return</p>
                <p className="qlos">FAQS</p>
            </div>
            <div>
                <h3>Our Stores</h3>
                <p className="qlos">New York</p>
                <p className="qlos">London SF</p>
                <p className="qlos">Cockfosters BP</p>
                <p className="qlos">Los Angeles</p>
                <p className="qlos">Chicago</p>
                <p className="qlos">Las Vegas</p>
                <p className="qlos">Albarto</p>
            </div>
            <div>
                <img src="footer-logo.png" alt="" />
                <br />
                <br />
                <button className="btn_top" onClick={scrollfunction}>
                    BACK TOP <WiDirectionUp />
                </button>
            </div>
        </div>
    );
}
