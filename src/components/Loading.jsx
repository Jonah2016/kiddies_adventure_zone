import React from "react";
const {
  LOAD_1,
  LOAD_2,
  LOAD_3,
  LOAD_4,
  LOAD_5,
  LOAD_6,
} = require("../constants/index.js");

function Loading({ type }) {
  return (
    <>
      {type === LOAD_1 && <div>Loading.........</div>}
      {type === LOAD_2 && <div>Loading.........2</div>}
      {type === LOAD_3 && <div>Loading.........3</div>}
      {type === LOAD_4 && <div>Loading.........4</div>}
      {type === LOAD_5 && <div>Loading.........5</div>}
      {type === LOAD_6 && <div>Loading.........6</div>}
    </>
  );
}

export default Loading;
