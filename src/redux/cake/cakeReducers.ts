import { BUY_CAKE } from "./cakeTypes";

type CakeState = {
  numOfCakes: number;
};

interface CakeAction {
  type: string;
  payload: number;
}
const initialState: CakeState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action: CakeAction) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};


export default cakeReducer;