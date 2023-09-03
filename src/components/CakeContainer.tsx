import { useState } from "react";
import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

type CakeState = {
    cake:{
        numOfCakes: number;
    }
  };

type CakeContainerProps = {
    numOfCakes: number;
    buyCake: (num: number) => CakeState;
}
const  CakeContainer:React.FC<CakeContainerProps> = ({numOfCakes, buyCake}) => {
  const [num, setNum] = useState<number>(1);

return (
    <>
      <h1>number of Cakes: {numOfCakes}</h1>
      <input type="text" value={num} onChange={(e: React.BaseSyntheticEvent) => setNum(e.target.value)} />
      <button onClick={() => buyCake(num)}>buy cake</button>
    </>
  );
}

const mapStateToProps = (state:CakeState) => ({numOfCakes: state.cake.numOfCakes})

const mapDispatchToProps = (dispatch: Function) => ({buyCake: (num:number) => dispatch(buyCake(num))})

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
