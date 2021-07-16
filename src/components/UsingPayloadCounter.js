import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import logger from "redux-logger";
import { buyCake } from "../action/index";

function UsingPayload(props) {
  const [number, setNumber] = useState(1);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return props.numOfCakes % 2 == 0;
  }, [props.numOfCakes]);
  
  // const isEven = () =>{
  //     let i = 0;
  //     while( i < 2000000000000000) i++
  //     return props.numOfCakes % 2 == 0
  // }

  return (
    <div>
      <h4>Number of cakes {props.numOfCakes}</h4>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
      <h1>{isEven ? "Even" : "Odd"}</h1>
    </div>
  );
}

//to get all state
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//to dispatch the action call action creator
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsingPayload);
