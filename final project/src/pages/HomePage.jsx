import { postsData } from "../data/Data";
import FlagSecesion from "./home page/FlagSecesion";
import HeaderProduct from "./home page/HeaderProduct";
import MostViewed from "./home page/MostViewed";
import PostCard from "./home page/PostCard";
import SecesionOne from "./home page/SecesionOne";
import SecesionThree from "./home page/SecesionThree";
import SecesionTwo from "./home page/SecesionTwo";
import TopBrands from "./home page/TopBrands";

export default function HomePage() {
  return (
      <div>
          <HeaderProduct />
          <SecesionOne />
          <br />
          <h3 className="titleOfSecesion">Trending Now</h3>
          <div className="posts_container">
              {postsData.map((ele) => (
                  <PostCard key={ele.id} image={ele.image} title={ele.title} Category={ele.Category} beforPrice={ele.beforPrice} afterPrice={ele.afterPrice} />
              ))}
              <br />
          </div>
          <br />
          <h3 className="titleOfSecesion">Top Brands</h3>
          <TopBrands />
          <SecesionTwo />
          <br />
          <SecesionThree />
          <br />
          <h3 className="titleOfSecesion">Most Viewed</h3>
          <div className="posts_container">
              {postsData.map((ele) => (
                  <MostViewed key={ele.id} image={ele.image} title={ele.title} Category={ele.Category} beforPrice={ele.beforPrice} afterPrice={ele.afterPrice} />
              ))}
          </div>
          <br />
          <FlagSecesion />
          <br />
      </div>
  );
}
