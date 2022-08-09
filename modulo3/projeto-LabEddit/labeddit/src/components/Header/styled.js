import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.page ? "space-between" : "flex-end")};
  background-color: #ededed;
  max-width: 100vw;
  height: 8vh;
  padding: 0 20px;
`;

export const Logo = styled.div`
  position: absolute;
  top: center;
  left: 46vw;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  @media screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    left: 47vw;
  }
  @media screen and (min-device-width: 1025px) {
    left: 48vw;
  }
`;

export const Orange = styled.div`
  background-color: #fe7e02;
  border-radius: 100% 0 0 0;
  height: 14px;
  width: 14px;
`;

export const Gray = styled.div`
  background-color: #45525b;
  border-radius: 100% 0 0 0;
  height: 14px;
  width: 14px;
`;

export const LightOrange = styled.div`
  background-color: #f9b24e;
  border-radius: 0 0 100% 0;
  height: 14px;
  width: 14px;
`;

export const LightGray = styled.div`
  background-color: #a8bbc6;
  border-radius: 0 0 100% 0;
  height: 14px;
  width: 14px;
`;
