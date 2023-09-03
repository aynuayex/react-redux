import { useDispatch, useSelector } from 'react-redux'
import buyIceCream from "../redux/iceCream/iceCreamActions";

type IceCreamState = {
    iceCream: {
        numOfIceCreams: number;
    }
  };


function HooksIceCreamContainer() {

    const numOfIceCreams = useSelector((state:IceCreamState) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch();

    return (
      <>
        <h1>number of Icecreams: {numOfIceCreams}</h1>
        <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
      </>
    );
  }
  
  export default HooksIceCreamContainer;
  