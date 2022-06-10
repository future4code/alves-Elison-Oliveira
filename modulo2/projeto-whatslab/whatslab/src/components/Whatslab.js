import React from "react";
import styled from "syled-components";

const style = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;
const ConteineMensagem = styled.div`
  height: 70%;
`;
const fooderMensagem = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
`;

class Whatslab extends React.Component {
  render() {
    return (
      <>
        <ConteineMensagem></ConteineMensagem>

        <fooderMensagem></fooderMensagem>
      </>
    );
  }
}
export default Whatslab;
