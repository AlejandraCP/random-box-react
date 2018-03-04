import React, { Component } from "react";
import { render } from "react-dom";

import Box from "../actions/Box";

import "../../public/build/js/index.css";

const wrapper = document.getElementById("root");

function randomStyle() {
  let styles = ["font-1", "font-2", "font-3", "font-4", "font-5", "font-6"];
  let styleRandom = styles[Math.floor(Math.random() * styles.length)];
  return styleRandom;
}

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const color = `rgb(${r},${g},${b})`;

  return color;
}

class BoxContainer extends Component {
  render() {
    const colorsRandom = { backgroundColor: randomColor() };
    return (
      <Box
        colorRamdon={colorsRandom}
        fontStyle={randomStyle()}
        phrase="Los sueños no mueren cuando abres los ojos"
      />
    );
  }
}

render(<BoxContainer />, wrapper);
export default BoxContainer;
