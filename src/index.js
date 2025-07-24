import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// const talel = { color: "red",
//   fontSize: "80px",
//    textTransform: "uppercase" ,
//    border : "solid" ,
//    borderColor : "green" ,
//    borderRadius : "20px"
//    } ;

function Header() {
  // return <h1 style={talel}>Fast React Pizza Co . </h1>;
  return (
    <header>
      <h1>Fast React Pizza Co . </h1>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <h2 className="menu-title">Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/Funghi.jpg"
        price={20}
        ingredients="Tomato, mozarella, mushrooms, and onion"
      />
    </div>
  );
}

function Pizza(props) {
  console.log(props)
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}</span>
    </div>
  );
}

function Footer() {
 
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour)  alert ("We're currently open")
  //     else alert ("sorry we're close !! ")

  return (
    <footer>{new Date().toLocaleTimeString()} . We're currently open</footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
