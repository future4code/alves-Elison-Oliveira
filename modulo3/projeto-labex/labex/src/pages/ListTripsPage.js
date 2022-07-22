import React from "react";
import { goToHomePage, goToApplicationFormPage } from "../routes/cordinator";
import { useHistory } from "react-router-dom";

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
