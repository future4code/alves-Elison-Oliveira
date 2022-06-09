import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import FotoVasco from "../src/img/vasco.jpg";
import FotoTigre from "../src/img/tigre.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    arrayPost: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },

      {
        nomeUsuario: "VascoOff",
        fotoUsuario: FotoVasco,
        fotoPost: FotoVasco,
      },

      {
        nomeUsuario: "SelvaOff",
        fotoUsuario: FotoTigre,
        fotoPost: FotoTigre,
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPosts = () => {
    const novoPosts = {
      nomeUsuario: this.state.valorInputNomeUsuario,

      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.stade.valorInputFotoPost,
    };

    const novoFred = [...this.state.arrayPost, novoPosts];
    this.setState({ arrayPost: novoFred });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listasPost = this.state.arrayPost.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        {listasPost}

        <input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome Do Usuario"}
        />

        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto Do Usuario"}
        />

        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"foto do pots"}
        />

        <button onClick={this.adicionaPosts}>Adicionar</button>
      </MainContainer>
    );
  }
}

export default App;
