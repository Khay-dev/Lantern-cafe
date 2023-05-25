import Nav from "../components/Nav";
import "../styles/Main.css";
import { Link } from "react-router-dom";
// import Image1 from "../img/nav.jpg";
import food1 from "../img/pancake.png";
import food2 from "../img/specialrice.png";
import food3 from "../img/planball.png";
import about from "../img/about .png";
import game from "../img/game2.png";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
const Home = () => {
  let Foods = [
    {
      image: food1,
      id: crypto.randomUUID(),
    },
    {
      image: food2,
      id: crypto.randomUUID(),
    },
    {
      image: food3,
      id: crypto.randomUUID(),
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lantern Cafe</title>
        <link
          rel="icon"
          href="../img/IMG-2984.PNG"
          type="image/icon type"
        ></link>
      </Helmet>
      <div className="home">
        <div className="hero">
          <Nav />
          <div className="main-hero">
            <h2>
              Lantern Cafe <br />
              More Than A Restaurant.
            </h2>
            <p>
              Indulge in all day dining delights, satisfying your cravings with
              our extensive menu, available anytime. Enjoy Breakfast, Lunch or
              Dinner at our own pace, as we redefine the traditional meal
              experience.
            </p>
          </div>
        </div>
        <section className="section-2">
          <div className="section-2-main">
            <div className="section-2-title"> The Menu</div>
            <div className="section-2-p">
              From breakfast favourites that greet the morning sun to salvory
              delights that satisfy evening cravings, We believe that every
              moment is an opportunity to savor exceptional flavors. Our
              thoughtfully crafted menu displays a wide array of dishes
              carefully prepared to satisfy your taste buds.
            </div>
          </div>
          <div className="section-2-b">
            {Foods.map((food) => (
              <div className="box" key={food.id}>
                <div className="box-img">
                  <img src={food.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <Link to="/Menu">
            <button className="custom-btn btn-13">
              <span>Menu</span>
            </button>
          </Link>
        </section>
        <section className="section-1">
          <div className="section-1-a">
            <div className="section-title"> Lantern Cafe </div>
            <div className="section-text">
              We’re all about the uniqueness of our great meals with a memorable
              dining experience, creating sweet memories and spending quality
              time with loved ones, family and friends. The space is not only a
              feast for the eyes we also offer engaging games and an atmosphere
              that sparks creativity and inspiration. This imaginative heaven is
              brought to life by a dedicated team.
            </div>
            <Link to="/About">
              <button className="custom-btn btn-13">
                <span>Read More</span>
              </button>
            </Link>
          </div>
          <div className="section-1-b">
            <img src={about} alt="picture" />
          </div>
        </section>

        <section className="section-3">
          <div className="section-3-a">
            <img src={game} alt="picture" />
          </div>
          <div className="section-3-b">
            <div className="section-title">
              {" "}
              Elevate your experience with exciting selection of tabletop games.
            </div>
            <div className="section-text">
              Whether you are enjoying a meal or waiting for your order, our
              games are here to add an extra dose of fun to your time at our
              restaurant. Gather your friends,roll the dice let the good times
              roll as you create lasting memories.
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
