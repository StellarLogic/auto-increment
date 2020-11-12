import React from "react";
import Progressbar from "../Progressbar/Progressbar";
import "./styles.scss";

const Polls = ({ show }) => {
  if (!show) return null;

  return (
    <div className="polls">
      <h4 className="label">
        <span className="poll-title">Poll 1:</span> Do you think that the event
        provided a good platform for dialogue on global solidarity and
        interfeoendence?
      </h4>
      <div className="polls-block">
        <Progressbar label="Yes" percentage={12} className="success" />
        <Progressbar label="No" percentage={20} className="warning" />
      </div>
    </div>
  );
};

export default Polls;
