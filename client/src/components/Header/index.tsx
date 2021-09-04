import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Center>SoS Everyone</Center>
          <Rigth>유저 프로필</Rigth>
        </Wrapper>
      </Container>
      <Space />
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 999;
  -webkit-box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1.5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Center = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Rigth = styled.div`
  position: absolute;
  display: flex;
  right: 10px;
`;

const Space = styled.div`
  height: 80px;
`;
