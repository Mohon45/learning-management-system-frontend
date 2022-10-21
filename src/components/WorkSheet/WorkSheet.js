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
        <div class="row gy-5 py-5">
          <div class="col-xl-4 col-md-6">
            <div class="service-item">
              <div class="img">
                <img src={liveSession} class="img-fluid" alt="" />
              </div>
              <div class="details">
                <div class="icon">
                  <i class="fa-solid fa-users-between-lines"></i>
                </div>
                <h3>Live Session</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-item">
              <div class="img">
                <img src={groupStudy} class="img-fluid" alt="" />
              </div>
              <div class="details">
                <div class="icon">
                  <i class="fa-solid fa-group-arrows-rotate"></i>
                </div>
                <h3>Find a Group Study</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-item">
              <div class="img">
                <img src={shareIdea} class="img-fluid" alt="" />
              </div>
              <div class="details">
                <div class="icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <h3>Share Ideas</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="service-item">
              <div class="img">
                <img src={qa} class="img-fluid" alt="" />
              </div>
              <div class="details">
                <div class="icon">
                  <i class="fa-solid fa-clipboard-question"></i>
                </div>
                <h3>QA Session</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkSheet;
