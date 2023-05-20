import React from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

const COLORS = {
  PRIMARY: "#38d39f",
};

const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;

const Loader = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        width: "100%",
        height: "80vh",
      }}
    >
      <div className="w-25 text-center mx-auto" style={{ color: "red" }}>
        <HashLoader
          color={COLORS.PRIMARY}
          loading={true}
          css={override}
          height={30}
          width={7}
          radius={2}
        />
      </div>
    </div>
  );
};

export default Loader;
