import React from "react";
import styled from "styled-components";
import axios from "axios";
import PageDetail from "./PageDetail";

const DeleteButton = styled.span`
  color: red;
  padding-left: 20px;
  cursor: pointer;
`;

const newUser = {
  headers: {
    Authorization: "Elison-Moises-Alves",
  },
};

class Users extends React.Component {
  state = {
    usersList: [],
    pagPrincipal: "usersList",
    userId: "",
    name: "",
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        newUser
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = (userId) => {
    if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          newUser
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.fetchUsersList();
        })
        .catch((e) => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };

  changePage = (userId) => {
    if (this.state.pagPrincipal === "usersList") {
      this.setState({ pagPrincipal: "userDetail", userId: userId });
    } else {
      this.setState({ pagPrincipal: "usersList", userId: "" });
    }
  };

  handleNameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name}&email=`,
        newUser
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      })
      .catch((error) => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.pagPrincipal === "usersList" ? (
          <div>
            <ul>
              {this.state.usersList.length === 200 && <div>Carregando...</div>}
              {this.state.usersList.map((user) => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <DeleteButton
                      onClick={() => this.handleUserDeletion(user.id)}
                    >
                      X
                    </DeleteButton>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Digite nome para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <PageDetail userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Users;
