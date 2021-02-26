import React from "react";
import PropTypes from "prop-types";
import Goal from "../Goal/Goal";

const GoalsList = ({ goals }) => {
  return (
    <div className="container">
      {goals.map((goal, index) =>
        <Goal
          key={index}
          name={goal.name}
          data={goal.data}
          type={goal.type}
          hideItems={goal.hideItems}
        />
      )}
    </div>
  );
};

GoalsList.propTypes = {
  goals: PropTypes.array.isRequired
};

export default GoalsList;
