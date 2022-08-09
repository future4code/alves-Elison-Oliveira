function Header(props) {
  return (
    <header>
      <h1>AstroMatch</h1>



      {props.page === "profiles" ? (
        <button onClick={props.goToMatchesPage}>Ir para matches</button>
      ) : (
        <button onClick={props.goToProfilesPage}>Ir para perfis</button>
      )}
    </header>
  );
}

export default Header;
