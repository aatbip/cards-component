import React from "react";
import { TourCards } from "./TourCards";

import CircleLoader from "react-spinners/ClipLoader";

export const ToursPage = (props) => {
  const override = {
    margin: "0 auto",
    marginTop: "100px",
  };

  const notInterested = (id) => {
    props.notInterested(id);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <p className="our-tours">Our Tours</p>
        {props.toursData.length === 0 && (
          <p className="reload" onClick={props.reload}>
            Reload?
          </p>
        )}
        {props.loader ? (
          <CircleLoader
            color="blue"
            loading={props.loader}
            cssOverride={override}
            size={150}
          />
        ) : (
          <div className="tour-cards">
            {props.toursData.map((tour) => {
              return (
                <TourCards
                  key={tour.id}
                  {...tour}
                  notInterested={notInterested}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
