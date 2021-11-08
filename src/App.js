import { Component } from "react";
import Productos from "../src/componets/Productos";
import Layout from "../src/componets/Layout";
import Title from "../src/componets/Title";
import Navbar from "../src/componets/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "./productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "./productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "./productos/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("no hace nada")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
