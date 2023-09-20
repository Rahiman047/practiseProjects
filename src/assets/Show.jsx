import React from "react";

const ShowJsx = (eachData) => {
  const { userData } = eachData;

  const { joke } = userData;

  return (
    <>
      <h1>{joke}</h1>
    </>
  );
};

export default ShowJsx;
