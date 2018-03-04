import React from "react";
import PropTypes from "prop-types";


const Box = ({ colorRamdon, fontStyle, phrase }) => (
  <div
    style={colorRamdon}
    className="position mt-5 text-center"
  >
    <p className={fontStyle}>{phrase}</p>
  </div>
);

Box.propTypes = {
  phrase: PropTypes.string.isRequired,
};

export default Box;
