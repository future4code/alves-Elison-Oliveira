import React from "react";

import axios from "axios";

const newUser = {
  headers: {
    Authorization: "Elison-Moises-Alves",
  },
};

class PageDetail extends React.Component {
  state = {
    userEdition: "editButton",
    userDetail: {},
    name: "",
    email: "",
  };

  componentDidMount() {
    this.getUserDetail();
  }

  getUserDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
        newUser
      )
      .then((response) => {
        this.setState({ userDetail: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeUserEditionFiel = () => {
    if (this.state.userEdition === "editButton") {
      this.setState({ userEdition: "userEditForm" });
    } else {
      this.setState({ userEdition: "editButton" });
    }
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
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
        body,
        newUser
      )
      .then(() => {
        this.setState({ name: "", email: "" });
        this.getUserDetail();
        this.changeUserEditionFiel();
        alert(`Usuário ${this.state.name} editado com sucesso!`);
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    const userEdition =
      this.state.userEdition === "editButton" ? (
        <button onClick={this.changeUserEditionFiel}>Editar usuário</button>
      ) : (
        <div>
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
          <button onClick={this.handleCreateUser}>Salvar edição</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.userDetail.name}</p>
          <p>{this.state.userDetail.email}</p>
        </div>
        <div>{userEdition}</div>
        <hr />
        <button onClick={this.props.changePage}>
          Voltar para lista de usuários
        </button>
      </div>
    );
  }
}

export default PageDetail;
