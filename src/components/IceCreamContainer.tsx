import { useState } from "react";
import { connect } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamActions";

type IceCreamState = {
    iceCream:{
    numOfIceCreams: number;
    }
  };

type IceCreamContainerProps = {
    numOfIceCreams: number;
    buyIceCream: (num: number) => IceCreamState;
}
const  IceCreamContainer:React.FC<IceCreamContainerProps> = ({numOfIceCreams, buyIceCream}) => {
  const [num, setNum] = useState<number>(1);
return (
    <>
      <h1>number of Icecreams: {numOfIceCreams}</h1>
      <input type="text" value={num} onChange={(e: React.BaseSyntheticEvent) => setNum(e.target.value)} />
      <button onClick={() => buyIceCream(num)}>buy icecream</button>
    </>
  );
}

const mapStateToProps = (state:IceCreamState) => ({numOfIceCreams: state.iceCream.numOfIceCreams})

const mapDispatchToProps = (dispatch: Function) => ({buyIceCream: (num: number) => dispatch(buyIceCream(num))})

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);
