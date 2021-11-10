import React from "react";
import PropTypes from "prop-types";
export const GetData = ({ Name, Bio, Profession, children, handleName }) => {
  handleName(Name);
  return (
    <div>
      <span>
        <h1>Hello {Name}</h1>
        <h4>{children}</h4>
        <h2>{Bio}</h2>
        <h3>{Profession}</h3>
      </span>
    </div>
  );
};

GetData.propTypes = {
  Name: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,
};

GetData.defaultProps = {
  Name: "Admin",
};
