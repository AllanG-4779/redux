import React from "react";
import { useDispatch, useSelector } from "react-redux";

import buyBread from "../Redux/cake/breadActions";

function BreadContainer() {
 
  // @ts-ignore
  const bread = useSelector((state) => state.bread.breadNum);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Number of bread {bread}</h4>
      <button onClick={()=>dispatch(buyBread())}>Buy Bread</button>
    </div>
  );
}

export default BreadContainer;
