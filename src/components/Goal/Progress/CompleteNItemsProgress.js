import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../ProgressBar/ProgressBar";

const CompleteNItemsProgress = ({ data }) => {
  return (
    <div>
      <ProgressBar completedPercentage={calculatePercentage(data)} />
      <div className="has-text-centered is-size-4">{renderBarLabel(data)}</div>
    </div>
  )
};

const calculatePercentage = data => {
  return (data.entries.length / data.itemCountToComplete) * 100;
};

const renderBarLabel = data => {
  return `${data.entries.length}/${data.itemCountToComplete}`;
};

CompleteNItemsProgress.protoTypes = {
  data: PropTypes.object.isRequired
};

export default CompleteNItemsProgress;
