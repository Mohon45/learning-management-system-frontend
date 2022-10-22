import React from "react";
import Layout from "../../HOC/Layout";
import img from "../../Assets/img/avatar.svg";

const TeacherMessage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4 conversation-active-section">
            <div className="conversation-active">
              <h3>Conversations</h3>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
              <div className="conversation-person my-3">
                <img src={img} alt="" />
                <p>Alex</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <h1 className="text-center fw-bold mt-5">
                No conversations selected
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherMessage;
