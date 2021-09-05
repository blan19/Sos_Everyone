import React, { VFC } from "react";
import { Container, Header, ModalForm } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { color } from "../../lib/styles/styles";

interface PropsType {
  onCloseModal: () => void;
}

const CategoryModal: VFC<PropsType> = ({ onCloseModal }) => {
  return (
    <Container>
      <ModalForm>
        <Header>
          <span>Title</span>
          <AiOutlineClose
            color={color.violet[6]}
            size="1.7em"
            style={{ position: "absolute", right: "10px", cursor: "pointer" }}
          />
        </Header>
      </ModalForm>
    </Container>
  );
};

export default CategoryModal;
