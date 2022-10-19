import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    <div className="container count-section mb-5">
      <div className="row">
        <div className="col-md-3 text-center">
          <h1 className="fw-bold">
            <CountUp end={1000} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <h3 className="count-title">Students</h3>
        </div>
        <div className="col-md-3 text-center">
          <h1 className="fw-bold">
            <CountUp end={200} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <h3 className="count-title">Subjects</h3>
        </div>
        <div className="col-md-3 text-center">
          <h1 className="fw-bold">
            <CountUp end={50} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <h3 className="count-title">Events</h3>
        </div>
        <div className="col-md-3 text-center">
          <h1 className="fw-bold">
            <CountUp end={170} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <h3 className="count-title">Teachers</h3>
        </div>
      </div>
    </div>
  );
};

export default Count;
