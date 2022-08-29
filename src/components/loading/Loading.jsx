import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lotties/loadingLottie.json";

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={loadingLottie}
        style={{
          height: "200px",
          width: "200px",
        }}
      />
    </div>
  );
};

export default Loading;
