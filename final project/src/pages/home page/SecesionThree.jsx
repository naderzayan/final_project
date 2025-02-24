import { Link } from "react-router-dom";


export default function SecesionThree() {
  return (
      <div className="SecesionThree">
        <img src="ad-min-1.jpg" alt="" />
        <h2>Discount Product</h2>
          <ul className="links">
              <Link>On Sell</Link>
              <Link>Hot Sell</Link>
              <Link>Trend</Link>
              <Link>Best Sell</Link>
          </ul>
    </div>
  );
}
