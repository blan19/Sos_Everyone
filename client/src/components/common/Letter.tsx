import React from "react";
import Lottie from "react-lottie";
import letter from "../../lottie/letter.json";

const Letter = () => {
  const defaultValue = {
    loop: true,
    autoplay: true,
    animationData: letter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultValue} />;
};

export default Letter;
