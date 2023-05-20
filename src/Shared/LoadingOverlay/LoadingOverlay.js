import React from "react";
import Loading from "react-loading-overlay";
import { HashLoader } from "react-spinners";
import "./LoadingOverlay.css";

const LoadingOverlay = ({ active, children }) => {
  const COLORS = {
    PRIMARY: "#38d39f",
  };
  return (
    <Loading active={active} spinner={<HashLoader color={COLORS.PRIMARY} />}>
      {children}
    </Loading>
  );
};

export default LoadingOverlay;
