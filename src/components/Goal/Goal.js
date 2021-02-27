import React from "react";
import PropTypes from "prop-types";
import CompleteNItemsProgress from "./Progress/CompleteNItemsProgress";
import ReachNumberProgress from "./Progress/ReachNumberProgress";
import GoalItem from "./GoalItem";
import Hideable from "../Hideable/Hideable";

const Goal = ({ name, data, type, hideItems }) => {
  return (
    <div className="container">
      <hr />
      <h1 className="title has-text-centered">{name}</h1>
      {renderProgress(data, type)}
      <Hideable isHidden={hideItems == null || hideItems }>
        <div className="columns">
            {mapGoalItems(data.entries)}
        </div>
      </Hideable>
    </div>
  );
};

const renderProgress = (data, type) => {
  if (type === "COMPLETE_N_ITEMS") {
    return <CompleteNItemsProgress data={data} />;
  }

  if (type === "REACH_NUMBER") {
    return <ReachNumberProgress data={data} />;
  }
}

const chunkArray = (array, chunk_size) => {
  var results = [];

  while (array.length) {
    results.push(array.splice(0, chunk_size));
  }

  return results;
}
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

const mapGoalItems = items => {
  const chunkedItems = transpose(chunkArray(items.slice(), 3));
  return chunkedItems.map((row, rowIndex) => {
    return (
    <div key={rowIndex} className="column">
      {row.map((item, index) => (
        <div key={index} className="col">
          <GoalItem
            title={item.value}
            date={item.date}
            imageUrl={item.imageUrl}
            timestamp={item.timestamp}
          />
        </div>
      ))}
    </div>
    );
  });
};

Goal.protoTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  hideItems: PropTypes.bool
};

export default Goal;
