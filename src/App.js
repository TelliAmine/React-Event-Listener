import React, { Component } from "react";
import Box from './Component/Box'
import "./App.css";
import Habiba from "./Image/Habiba.jpg";
import Oussama from "./Image/Oussama.jpg";
import Ines from "./Image/Ines.jpg"; ;


class App extends Component {
  render() {
    return (
      <div className="App">
       <Box image={Habiba} nom="Habiba Ghribi" contenue="née le 9 avril 1984 à Kairouan, est une athlète tunisienne, spécialiste des courses de fond et de demi-fond." />
        <Box image={Oussama} nom="Oussama Melouli" contenue="né le 16 février 1984 à La Marsa près de Tunis, est un nageur tunisien." />
        <Box image={Ines} nom="Ines Boubakri" contenue=" née le 28 décembre 1988 à Tunis, est une escrimeuse tunisienne pratiquant l'épée et le fleuret individuel." />
        <div> 
        <img id='img'/>
        <h1 id='nom'></h1>
        <p id='contenue'> </p>
        </div>
      </div>
    );
  }
}
export default App;
