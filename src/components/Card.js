import React, { Fragment } from "react";

const Card = ({ id, name, email }) => {
  return (
    <Fragment>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img style={{ maxWidth: '200px'}} src={`https://robohash.org/${id}?200x200`} alt='robot' />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  )
};

export default Card;