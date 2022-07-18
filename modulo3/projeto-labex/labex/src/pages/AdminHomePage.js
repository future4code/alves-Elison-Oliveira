import React from "react";
import { useHistory } from "react-router-dom";
import { goToCreateTripPage, goToHomePage } from "../routes/coordinator";
import useProtected from "../hooks/useProtected";
import useRequestData from "../hooks/useRequestData";
import AdminTripCard from "../components/AdminTripCard/AdminTripCard";
import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 10px 0;
`;

export const AdminHomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
`;

const AdminHomePage = () => {
  useProtected();
  const history = useHistory();
  const [tripsData, getTrips] = useRequestData("/trips", {});

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((t) => {
      return (
        <AdminTripCard key={t.id} name={t.name} id={t.id} getTrips={getTrips} />
      );
    });

  return (
    <AdminHomeScreenContainer>
      <button onClick={() => goToHomePage(history)}>Volta</button>
      <h1>Painel Administrativo</h1>

      <ButtonsContainer>
        <button onClick={() => goToCreateTripPage(history)}>
          Criar Viagem
        </button>
        <button>Logout</button>
      </ButtonsContainer>
      {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
    </AdminHomeScreenContainer>
  );
};

export default AdminHomePage;
