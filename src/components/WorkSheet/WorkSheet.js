import React from "react";
import Layout from "../../HOC/Layout";
import commingSoon from "../../Assets/img/comming-soon.webp";

const WorkSheet = () => {
  return (
    <Layout>
      <div className="container">
        <img
          className="w-100"
          style={{ height: "80vh" }}
          src={commingSoon}
          alt=""
        />
      </div>
    </Layout>
  );
};

export default WorkSheet;
