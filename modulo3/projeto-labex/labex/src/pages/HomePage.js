import React from "react";
import { goToListTripsPage, goToLoginPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import LogoAstro from "../img/LogoAstro.png";

export const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
`;

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <h1>LabeX</h1>
      <img src={LogoAstro} />
      <ButtonsContainer>
        <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
        <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
      </ButtonsContainer>
    </>
  );
};

export default HomePage;
