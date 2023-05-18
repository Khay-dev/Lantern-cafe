import Nav from "../components/Nav";
import "../styles/Menu.css";
import Image1 from "../img/nav.jpg";
import { useState } from "react";
import Footer from "../components/Footer";
const Menu = () => {
  let Menus = [
    {
      name: "Burgers & Chips",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "Burger",
    },
    {
      name: "Sandwich",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "Burger",
    },
    {
      name: "Food Tray",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "Burger",
    },
    {
      name: "Rice & Chicken",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "main-dish",
    },
    {
      name: "Spagetti Bolognese",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "main-dish",
    },
    {
      name: "Smoked Jollof",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "main-dish",
    },
    {
      name: "Vegetable Soup",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "main-dish",
    },
    {
      name: "Small Chops",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "desert",
    },
    {
      name: "Cup Cake",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "desert",
    },
    {
      name: "Ice Cream",
      iamge: Image1,
      id: crypto.randomUUID(),
      type: "desert",
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio molestiae cum sapiente! Eligendi laborum sint alias
            nulla, commodi numquam.
          </p>
          <div className="menu-btn">Download Our Menu</div>
        </div>
      </div>
      <section className="menu-section-2">
        <div className="section-2-btn">
          <p>Filter:</p>
          <div className="btn" onClick={() => sortData("all")}>
            All
          </div>
          <div className="btn" onClick={() => sortData("Burger")}>
            Bites
          </div>
          <div className="btn" onClick={() => sortData("main-dish")}>
            Main
          </div>
          <div className="btn" onClick={() => sortData("desert")}>
            Desert
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
