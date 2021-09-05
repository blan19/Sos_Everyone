import React, { useCallback } from "react";
import CategoryModal from "../../components/CategoryModal";
import Letter from "../../components/common/Letter";
import Person from "../../components/common/Person";
import Header from "../../components/Header";
import Responsive from "../../lib/styles/Responsive";

const Main = () => {
  const onCloseModal = useCallback(() => {}, []);
  return (
    <>
      <Header />
      <div style={{ width: "100%" }}>
        <Responsive>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "350px" }}>
              <Person />
            </div>
            <div
              style={{
                width: "250px",
              }}
            >
              <Letter />
            </div>
          </div>
        </Responsive>
      </div>
      <CategoryModal onCloseModal={onCloseModal} />
    </>
  );
};

export default Main;
