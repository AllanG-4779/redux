import React from "react";
import buyCake, { addCake } from "../Redux/cake/actions";
import { connect } from "react-redux";

function Cakes(props) {
  return (
    <div>
      <h4>Available Cakes {props.myCakes}</h4>
      <p>
        {props.myCakes > 10
          ? "No need to worry, Stock is perfect"
          : "Hey do something, cakes are running out "}
      </p>
      <button onClick={props.buyCake}>Buy a Cake</button>
      <button onClick={props.addCake}>Add Cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myCakes: state.cake.numberCake,
    found: state.alert,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
