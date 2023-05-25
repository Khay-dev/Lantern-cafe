/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav";
import "../styles/About.css";
import about1 from "../img/lantabout.png";
import about2 from "../img/chef.jpg";
import about3 from "../img/manager.jpg";
import about4 from "../img/waiter.jpg";
import Footer from "../components/Footer";

const About = () => {
  let teams = [
    {
      name: "Precious Daerego",
      role: " Head Chef",
      text: "His prior experience in local and continental cuisines is evident in every bite served and makes him the man behind the flavour.",
      image: about2,
      id: crypto.randomUUID(),
    },
    {
      name: "Ebere R.E",
      role: "Manager",
      text: "With her magnificient skills in managing the affairs of the business, she has and is still taking the business to a more refined level.",
      image: about3,
      id: crypto.randomUUID(),
    },
    {
      name: "Oluchi R.O",
      role: "Chief Waitress",
      text: "Utilizing her exquisite customer service skills, Lantern Cafe is rated high on customer service which is one of the keys to a successful business.",
      image: about4,
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
            Lantern Cafe is an imagination come through.
          </div>
          <div className="text">
            This is a testament to the power of culinary imagination. It
            transcends the boundaries of a typical restaurant, offering an
            experience that nourishes both body and soul. It is a place where
            food, art, and community converge, inviting guests to embark on a
            sensory journey that lingers in their memories long after they
            leave.
          </div>
        </div>
        <div className="section-about-b">
          <img src={about1} alt="picture" />
        </div>
      </section>
      <section className="section-about-2">
        <div className="main">
          "But Lantern Cafe is more than just a place to enjoy exceptional food.
          The restaurant hosts regular events, from karaoke to engagements and
          birthday surprise , creating a vibrant atmosphere."
        </div>
      </section>
      <section className="section-about-3">
        <div className="section-about-header">
          <div className="title"> Our Team</div>
          <div className="text">
            Our team is a dedicated and skilled group, working harmoniously to
            create an exceptional dining experience.
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
