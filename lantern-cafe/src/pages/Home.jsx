import Nav from "../components/Nav";
import "../styles/Main.css";
import { Link } from "react-router-dom";
import Image1 from "../img/nav.jpg";
import Footer from "../components/Footer";
const Home = () => {
  let Foods = [
    {
      image: Image1,
      title: "Lorem Ipsum",
      id: crypto.randomUUID()
    },
    {
      image: Image1,
      title: "Lorem Ipsum",
      id: crypto.randomUUID()
    },
    {
      image: Image1,
      title: "Lorem Ipsum",
      id: crypto.randomUUID()
    },
  ];

  return (
    <div className="home">
      <div className="hero">
        <Nav />
        <div className="main-hero">
          <h2>
            Lantern Cafe <br />
            More Than A Restaurant.
          </h2>
          <p>
            Indulge in all day dining delights,satisfying your cravings with our
            extensive menu, available anytime. Enjoy Breakfast, Lunch or Dinner
            at our own pace, as we redefine the traditional meal experience.
          </p>
        </div>
      </div>
      <section className="section-2">
        <div className="section-2-main">
          <div className="section-2-title"> The Menu</div>
          <div className="section-2-p">
            From breakfast favourites that greet the morning sun to salvory
            delights that satisfy evening cravings, We believe that every moment
            is an opportunity to savor exceptional flavors. Our thoughtfully
            crafted menu displays a wide array of dishes carefully prepared to
            satisfy your taste buds.
          </div>
        </div>
        <div className="section-2-b">
          {Foods.map((food) => (
            <div className="box" key={food.id}>
              <div className="box-img">
                <img src={food.image} alt="" />
              </div>
              <div className="title">{food.title}</div>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quis
            atque id dicta modi recusandae minima earum, voluptatum consectetur
            quidem sapiente voluptas necessitatibus unde ullam . . . . .
          </div>
          <Link to="/About">
            <button className="custom-btn btn-13">
              <span>Read More</span>
            </button>
          </Link>
        </div>
        <div className="section-1-b">
          <img src={Image1} alt="picture" />
        </div>
      </section>

      <section className="section-3">
        <div className="section-3-a">
          <img src={Image1} alt="picture" />
        </div>
        <div className="section-3-b">
          <div className="section-title">
            {" "}
            Elevate your experience with exciting selection of tabletop games.
          </div>
          <div className="section-text">
            Whether you are enjoying a meal or waiting for your order, our games
            are here to add an extra dose of fun to your time at our restaurant.
            Gather your friends,roll the dice let the good times roll as you
            create lasting memories.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
