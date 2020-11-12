import React, { useEffect, useState } from "react";
import "./styles.scss";

const Progressbar = ({
  label = "",
  delay = 1000,
  percentage = 0,
  className = "",
}) => {
  const [progress, setProgress] = useState(20);

  // useEffect(() => {
  //   for (let i = 0; i < percentage; i++) {
  //     setProgress(progress + 1);
  //   }
  // }, []);
  // console.log("percentage : ", percentage, "progress : ", progress);

  // console.log(label, progress);

  return (
    <div className={`progressbar-wraper ${className}`}>
      <span className="progress-block" style={{ width: `${progress}%` }}></span>
      <span className="progress-label">{label}</span>
      <span className="progress-count">{progress}%</span>
    </div>
  );
};

export default Progressbar;
