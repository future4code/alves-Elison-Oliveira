import React from "react";
import axios from "axios";
import styled from "styled-components";

const Botao = styled.button`
  margin: 0 auto;

  border: none;
  background-color: hsl(250, 35%, 26%);
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: black;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  cursor: pointer;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  border: 1px solid black;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px;
  border: none;
  height: 33vh;
  input {
    margin: 5px;
    height: 30px;
  }
`;

class SignUpPage extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailChange = (event) => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  handleCreateUser = () => {
    const newAxios = {
      headers: {
        Authorization: "Elison-Moises-Alves",
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        newAxios
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Login>
          <h2>Cadastro</h2>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <Botao onClick={this.handleCreateUser}>Cadastra</Botao>
        </Login>
      </div>
    );
  }
}

export default SignUpPage;
