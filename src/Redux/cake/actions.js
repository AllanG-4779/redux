import { BUY_CAKE,ADD_CAKE } from "./CakeType";


const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const addCake = (number)=>{
  return {
    type:ADD_CAKE,
    payload:number
  }
}


export default buyCake