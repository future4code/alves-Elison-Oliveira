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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"VascoOff"}
          fotoUsuario={FotoVasco}
          fotoPost={FotoVasco}
        />
        <Post
          nomeUsuario={"SelvaOff"}
          fotoUsuario={FotoTigre}
          fotoPost={FotoTigre}
        />
      </MainContainer>
    );
  }
}

export default App;
