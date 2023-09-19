import React from "react";

const showJsx = (eachData) => {
  console.log(eachData);
  const { id, company, description, name } = eachData;
  return (
    <>
      <h1>{company}</h1>
      <p>{company}</p>
      <p>{description}</p>
      <p>{name}</p>
    </>
  );
};

export default showJsx;
