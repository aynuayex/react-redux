import { BUY_ICECREAM } from "./iceCreamTypes";

type IceCreamState = {
    numOfIceCreams: number;
};

interface IceCreamAction {
  type: string;
  payload: number
}
const initialState: IceCreamState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action: IceCreamAction) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};


export default iceCreamReducer;