import styled from "styled-components";

export const ContainerMenuVisible = styled.section`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 17;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 29, 38, 0.7254551478794643) 77%,
    rgba(0, 77, 102, 0) 100%
  );

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const ContainerMenuClosed = styled.section`
  position: fixed;
  backdrop-filter: blur(30px);
  width: 100%;
  z-index: 15;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
