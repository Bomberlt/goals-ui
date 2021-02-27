import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ completedPercentage }) => {
  const dayInYearPercentage = dayOfYear() / 365 * 100;
  const progressColor =  completedPercentage > dayInYearPercentage
    ? 'is-success'
    : completedPercentage > (dayInYearPercentage / 2)
      ? 'is-warning'
      : 'is-danger';
  return (
    <progress
      className={"progress is-large " + progressColor}
      value={completedPercentage}
      max="100"
      title={`${Math.round(completedPercentage * 100) / 100}%`}
    >
      {`${completedPercentage}%`}
    </progress>
  );
};

const dayOfYear = () => {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default ProgressBar;
