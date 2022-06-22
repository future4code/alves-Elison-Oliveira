import React from "react";
import SignUpPage from "./components/SignUpPage";
import Users from "./components/Users";

export default class App extends React.Component {
  state = {
    pagPrincipal: "signUp",
  };

  changePage = () => {
    if (this.state.pagPrincipal === "signUp") {
      this.setState({ pagPrincipal: "users" });
    } else {
      this.setState({ pagPrincipal: "signUp" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de tela</button>
        {this.state.pagPrincipal === "signUp" ? <SignUpPage /> : <Users />}
      </div>
    );
  }
}
