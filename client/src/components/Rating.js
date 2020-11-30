import React from "react";

import "./style.min.css";

const Rating = ({ rating }) => {
  const getStarRating = () => {
    const count = Math.round(rating * 2);
    const fullStars = count % 2 === 0 ? count / 2 : (count - 1) / 2;
    const halfStar = count % 2 === 0 ? false : true;

    const getFullStars = (num) => {
      if (num === 5) {
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </>
        );
      } else if (num === 4) {
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </>
        );
      } else if (num === 3) {
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </>
        );
      } else if (num === 2) {
        return (
          <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </>
        );
      } else if (num === 1) {
        return (
          <>
            <i className="fas fa-star"></i>
          </>
        );
      } else {
        return <></>;
      }
    };

    return (
      <div>
        {getFullStars(fullStars)}
        {halfStar && <i className="fas fa-star-half" />}
      </div>
    );
  };

  return <div className="rating">{getStarRating()}</div>;
};

export default Rating;
