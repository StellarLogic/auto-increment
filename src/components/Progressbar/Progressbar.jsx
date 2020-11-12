import React, { useEffect, useState, useRef } from "react";
import "./styles.scss";

const Progressbar = ({
  label = "",
  delay = 1000,
  percentage = 0,
  className = "",
}) => {
  const intervalRef = useRef();

   useEffect(() => {
    let interval = setInterval(() => setProgress(progress => progress + 1), delay);
    
    intervalRef.current = interval;
  }, []);

  useEffect(()=>{
     if (progress === percentage) clearInterval(intervalRef.current);
  }, [progress, percentage]);

  return (
    <div className={`progressbar-wraper ${className}`}>
      <span className="progress-block" style={{ width: `${progress}%` }}></span>
      <span className="progress-label">{label}</span>
      <span className="progress-count">{progress}%</span>
    </div>
  );
};

export default Progressbar;
