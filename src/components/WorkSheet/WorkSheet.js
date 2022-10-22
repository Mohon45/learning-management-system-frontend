import React from "react";
import "./WorkSheet.css";
import Layout from "../../HOC/Layout";
import liveSession from "../../Assets/img/worksheet/live-session.jpg";
import groupStudy from "../../Assets/img/worksheet/group-study.jpg";
import shareIdea from "../../Assets/img/worksheet/share-idea.jpg";
import qa from "../../Assets/img/worksheet/qa.jpg";

const WorkSheet = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row gy-5 py-5">
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={liveSession} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-users-between-lines"></i>
                </div>
                <h3>Live Session</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={groupStudy} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-group-arrows-rotate"></i>
                </div>
                <h3>Find a Group Study</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={shareIdea} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3>Share Ideas</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={qa} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-clipboard-question"></i>
                </div>
                <h3>QA Session</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={qa} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-clipboard-question"></i>
                </div>
                <h3>Conceptual Session</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="service-item">
              <div className="img">
                <img src={qa} className="img-fluid" alt="" />
              </div>
              <div className="details">
                <div className="icon">
                  <i className="fa-solid fa-clipboard-question"></i>
                </div>
                <h3>Assingment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkSheet;
