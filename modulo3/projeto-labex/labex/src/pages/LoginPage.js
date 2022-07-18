import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import { login } from "../services/requests";
import useUnprotected from "../hooks/useUnprotected";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px 0;
`;

const LoginPage = () => {
  useUnprotected();
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
