/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav";
import "../styles/About.css";
import Image1 from "../img/nav.jpg";
import Footer from "../components/Footer";

const About = () => {
  let teams = [
    {
      name: "Akosa Praise",
      role: "Chef",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora id nemo adipisci quidem eaque laboriosam accusantium nisi autem quae?",
      image: Image1,
      id: crypto.randomUUID(),
    },
    {
      name: "Uju Chinedum",
      role: "Manager",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora id nemo adipisci quidem eaque laboriosam accusantium nisi autem quae?",
      image: Image1,
      id: crypto.randomUUID(),
    },
    {
      name: "Okpara Joel",
      role: "Chief Waiter",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora id nemo adipisci quidem eaque laboriosam accusantium nisi autem quae?",
      image: Image1,
      id: crypto.randomUUID(),
    },
  ];
  return (
    <div className="about">
      <div className="about-hero">
        <Nav />
        <div className="main-about-hero">
          <h2>ABOUT US</h2>
        </div>
      </div>
      <section className="section-about-1">
        <div className="section-about-a">
          <div className="title">
            {" "}
            Lantern Cafe Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
          </div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, quis
            atque id dicta modi recusandae minima earum, voluptatum consectetur
            quidem sapiente voluptas necessitatibus unde ullam Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Officia!
          </div>
        </div>
        <div className="section-about-b">
          <img src={Image1} alt="picture" />
        </div>
      </section>
      <section className="section-about-2">
        <div className="main">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis
          voluptate sunt libero molestias quaerat saepe in temporibus nesciunt
          dolorem"
        </div>
      </section>
      <section className="section-about-3">
        <div className="section-about-header">
          <div className="title"> Our Team</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sed
            omnis voluptatem. Accusantium, libero natus
          </div>
        </div>
        <div className="section-about-main">
          {teams.map((team) => (
            <div className="main-box" key={team.id}>
              <div className="main-img">
                <img src={team.image} alt="" />
              </div>
              <div className="main-name">{team.name}</div>
              <div className="main-role">{team.role}</div>
              <div className="main-text">{team.text}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
