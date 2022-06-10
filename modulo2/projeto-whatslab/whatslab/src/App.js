import logo from "./logo.svg";
import "./App.css";
import Whatslab from ".Component/Whatslab";
import React from "react";

const MainContainer = styled.div`
  display: flex;
`;
class App extends React.Component {
  state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  render() {
    return (
      <MainContainer>
        <input
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={" Usuario"}
        />

        <input
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"Mensagem"}
        />

        <button onClick={this.adicionaPosts}>Envia</button>
      </MainContainer>
    );
  }
}

export default App;
