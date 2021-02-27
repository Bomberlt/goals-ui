import React from "react";
import PropTypes from "prop-types";

const GoalItem = ({title, date, imageUrl}) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child is-12">
        <p className="title is-4">{title ? title : "[untitled]"}</p>
        <p className="subtitle">{date}</p>
        {imageUrl && (
          <figure className="image is-2by2">
            <img src={imageUrl}/>
          </figure>
        )}
      </article>
    </div>
  );
};

GoalItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageUrl: PropTypes.string
};

export default GoalItem;
