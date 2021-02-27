import React from "react";
import PropTypes from "prop-types";
import dateDifference from "date-difference";

const GoalItem = ({title, date, imageUrl, timestamp}) => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child is-12">
        <p className="title is-4">
          {title ? title : "[untitled]"}
        </p>
        <p className="subtitle">
          <span>
            {date}{renderDiff(date, timestamp)}
          </span>
          {imageUrl && (
            <figure className="image is-2by2">
              <img src={imageUrl}/>
            </figure>
          )}
        </p>
      </article>
    </div>
  );
};

const renderDiff = (dateOnCaption, taken_at_timestamp) => {
  if (!taken_at_timestamp) return null;

  const date1 = new Date(taken_at_timestamp*1000);
  const date2 = new Date(dateOnCaption+"T23:59:59+02:00");
  const diff = date1 - date2;
  const hoursDiff = Math.ceil(diff / (1000 * 60 * 60) % 60);
  if (diff > 0) {
    const diffFormated = dateDifference(date2, date1);
    return (
      <span
        className={"tag is-light " + (hoursDiff > 4 ? 'is-danger' : 'is-warning')}
        title={date1}
      >
        {diffFormated} late
      </span>
    );
  } else {
    return (
      <span className="tag is-primary  is-light">
        same day
      </span>
    );
  }
}

GoalItem.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageUrl: PropTypes.string,
  timestamp: PropTypes.number
};

export default GoalItem;
