// import components & styles & assets
import Nav from "../components/Nav";
import "../styles/Menu.css";
import Footer from "../components/Footer";
import Dmenu from "../assets/menu.pdf";
// import images
import food1 from "../img/chops.png";
import food2 from "../img/friesandgiz.png";
import food3 from "../img/noodles.png";
import food4 from "../img/waffels.png";
import food5 from "../img/pasta.png";
import food6 from "../img/burger.png";
import food7 from "../img/plantain.png";
import food8 from "../img/rice-1.png";
import food9 from "../img/rice-2.png";
import food10 from "../img/rice-3.png";
import food11 from "../img/sandwich.png";
import food12 from "../img/setoffries.png";
import food13 from "../img/spag-2.png";
import food14 from "../img/fritatata.png";
import food15 from "../img/tray.png";

import { useState } from "react";

const Menu = () => {
  let Menus = [
    {
      name: "Burgers & Chips",
      iamge: food6,
      id: crypto.randomUUID(),
      type: "Bites",
    },
    {
      name: "Sandwich & Chips",
      iamge: food11,
      id: crypto.randomUUID(),
      type: "Bites",
    },
    {
      name: "Food-Tray",
      iamge: food15,
      id: crypto.randomUUID(),
      type: "Bites",
    },
    {
      name: "Waffle-Sandwich",
      iamge: food4,
      id: crypto.randomUUID(),
      type: "Bites",
    },
    {
      name: "SmallChops",
      iamge: food1,
      id: crypto.randomUUID(),
      type: "Bites",
    },
    {
      name: "Jollof-Rice & Protein",
      iamge: food9,
      id: crypto.randomUUID(),
      type: "Main",
    },
    {
      name: " Pasta-Napoletana",
      iamge: food13,
      id: crypto.randomUUID(),
      type: "Main",
    },
    {
      name: "Mixed Rice Portion & Protein",
      iamge: food8,
      id: crypto.randomUUID(),
      type: "Main",
    },
    {
      name: "Dirty-Rice & Protein",
      iamge: food10,
      id: crypto.randomUUID(),
      type: "Main",
    },
    {
      name: "Spaghetti-Carbonara",
      iamge: food5,
      id: crypto.randomUUID(),
      type: "Main",
    },
    {
      name: "Fries & Protein",
      iamge: food12,
      id: crypto.randomUUID(),
      type: "Others",
    },
    {
      name: "Plantain-Frittata",
      iamge: food14,
      id: crypto.randomUUID(),
      type: "Others",
    },
    {
      name: "Special-Noodles",
      iamge: food3,
      id: crypto.randomUUID(),
      type: "Others",
    },
    {
      name: "Gizzdodo",
      iamge: food7,
      id: crypto.randomUUID(),
      type: "Others",
    },
    {
      name: "Fries & Protein",
      iamge: food2,
      id: crypto.randomUUID(),
      type: "Others",
    },
  ];
  const [filterData, setFilterData] = useState(Menus);
  // eslint-disable-next-line no-unused-vars
  const [selectedType, setSelectedType] = useState("all");

  let sortData = (type) => {
    setSelectedType(type);
    if (type === "all") {
      setFilterData(Menus);
    } else {
      const filtered = Menus.filter((item) => item.type === type);
      setFilterData(filtered);
    }
  };
  return (
    <div className="menu">
      <div className="menu-hero">
        <Nav />
        <div className="main-menu-hero">
          <h2>M E N U</h2>
          <p>
            Explore our tantalizing menu, carefully curated with an array of
            flavors and dishes crafted to satisfy every culinary desire.
          </p>
          <div className="menu-btn">
            <a href={Dmenu} download="Menu">
              Download Our Menu
            </a>
          </div>
        </div>
      </div>
      <section className="menu-section-2">
        <div className="section-2-btn">
          <p>Filter:</p>
          <div className="btn" onClick={() => sortData("all")}>
            All
          </div>
          <div className="btn" onClick={() => sortData("Bites")}>
            Bites
          </div>
          <div className="btn" onClick={() => sortData("Main")}>
            Main
          </div>
          <div className="btn" onClick={() => sortData("Others")}>
            Others
          </div>
        </div>
        <div className="section-2-main">
          {filterData.map((menu) => (
            <div className="main" key={menu.id}>
              <div className="main-img">
                <img src={menu.iamge} alt="" />
              </div>
              <div className="main-title">{menu.name}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
