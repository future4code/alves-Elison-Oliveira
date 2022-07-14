import React from "react";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import TripCard from "../components/TripCard/TripCard";
import useRequestData from "../hooks/useRequestData";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 50px 0 10px 0;
`;

export const ListScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

const ListTripsPage = () => {
  const [tripsData] = useRequestData("/trips", {});
  const history = useHistory();

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((t) => {
      return <TripCard key={t.id} trip={t} />;
    });

  return (
    <ListScreenContainer>
      <ButtonsContainer>
        <button onClick={() => goToHomePage(history)}>Voltar</button>
        <button onClick={() => goToApplicationFormPage(history)}>
          Inscrever-se
        </button>
      </ButtonsContainer>
      <h1>Lista de Viagens</h1>
      {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
    </ListScreenContainer>
  );
};

export default ListTripsPage;
