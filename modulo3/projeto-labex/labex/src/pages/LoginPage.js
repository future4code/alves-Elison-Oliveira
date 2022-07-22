import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/cordinator";

const LoginPage = () => {
  useUnprotectedPage();
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const onClickLogin = (e) => {
    e.preventDefault();
    login(form, history);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onClickLogin}>
        <input
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <ButtonsContainer>
          <button onClick={() => goToHomePage(history)}>Voltar</button>
          <button type={"submit"}>Entrar</button>
        </ButtonsContainer>
      </form>
    </div>
  );
};

export default LoginPage;
