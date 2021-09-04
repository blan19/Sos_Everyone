import React from "react";
import Lottie from "react-lottie";
import person from "../../lottie/person.json";

const Person = () => {
  const defaultValue = {
    loop: true,
    autoplay: true,
    animationData: person,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultValue} />;
};

export default Person;
