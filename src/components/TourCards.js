import React from "react";

export const TourCards = (props) => {
  const [readMore, setReadMore] = React.useState(false);

  const toggleReadmore = () => {
    setReadMore((prev) => !prev);
  };
  return (
    <li className="tour">
      <div className="tour-image">
        <img src={props.image} alt="tour shot" />
      </div>
      <div className="tour-header">
        <p>{props.name}</p>
        <p className="price">${props.price}</p>
      </div>
      <div className="tour-info">
        {readMore ? (
          <span>{props.info}</span>
        ) : (
          <span>{props.info.slice(0, 180)}...</span>
        )}
        {readMore ? (
          <span className="read-more-button" onClick={toggleReadmore}>
            Collapse
          </span>
        ) : (
          <span className="read-more-button" onClick={toggleReadmore}>
            Read More
          </span>
        )}
      </div>
      <div className="not-interested-button">
        <button
          type="button"
          value={props.id}
          key={props.id}
          onClick={() => props.notInterested(props.id)}
        >
          Not Interested
        </button>
      </div>
    </li>
  );
};
