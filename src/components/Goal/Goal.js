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
        <div className="tile is-ancestor is-16">
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

const mapGoalItems = items => {
  return items.map((item, index) => (
    <GoalItem key={index} title={item.value} date={item.date} imageUrl={item.imageUrl} />
  ));
};

Goal.protoTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  hideItems: PropTypes.bool
};

export default Goal;
