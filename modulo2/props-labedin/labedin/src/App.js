import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import img from "./components/img/avatar.png";
import img2 from "./components/img2/setinha.png";
import img3 from "./components/img3/f4bank.ico";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={img}
          nome="Elison Moises"
          descricao="Oi, meu nome e Elison sou estudante de full stack na labenu, procuro me forma e ser um grande Dev"
        />

        <ImagemButton imagem={img2} texto="Ver mais" />
      </div>

      <div className="page-section-container">
        <CardPequeno nome="E-mail:" descricao="elisonDev@gmail.com" />

        <CardPequeno nome="Endereço:" descricao="Rua Lateral oste ,001" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={img}
          nome="Full stack"
          descricao="Não é a linguagem de programação que define o programador, mas sim sua lógica.!"
        />

        <CardGrande imagem={img3} nome="F4bank" descricao="criação do site." />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
