import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lotties/loadingLottie.json";

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={loadingLottie}
        style={{
          width: "300px",
          height: "300px",
        }}
      />
    </div>
  );
};

export default Loading;
