import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../Redux/cake/actions";

function CakeHook() {
  // @ts-ignore
  const cakes = useSelector((state) => state.numberCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Number of Cakes {cakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Increase</button>
    </div>
  );
}

export default CakeHook;
