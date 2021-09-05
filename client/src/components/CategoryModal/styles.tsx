import styled from "@emotion/styled";

export const Container = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalForm = styled.form`
  width: 400px;
  background: white;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(128, 111, 128, 1);
  -moz-box-shadow: 0px 0px 3px 1px rgba(128, 111, 128, 1);
  box-shadow: 0px 0px 3px 1px rgba(128, 111, 128, 1);
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
