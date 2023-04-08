import "../index.css";
import Navbar from "../common/components/Navbar";
import Carouselslider from "../common/components/Carouselslider";
import Testimg from "../assets/demo images/demo-sq.jpg";
import {Cards} from "../common/components/Cards";

function Home() {

 

  return (
    <>
      <Navbar />
      <Carouselslider />

      {/* <div className="container width-set">
        <div className="center-itm">
          <p className="heading-text">Welcome </p>
          <p className="pera-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            dolor, reiciendis alias molestiae sapiente debitis, eligendi id
            beatae reprehenderit incidunt labore perspiciatis et nostrum. Harum
            quibusdam tempore dicta iste consequatur!
          </p>
        </div>
      </div> */}
      <div class="container my-5">
        <div class="path">
          <div class="mouse"></div>
        </div>
      </div>
    </>

  );
}

export default Home;
