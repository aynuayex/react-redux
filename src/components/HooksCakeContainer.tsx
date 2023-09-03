import { useDispatch, useSelector } from 'react-redux'
import buyCake from '../redux/cake/cakeActions';

type CakeState = {
  cake:{
    numOfCakes: number;
  }
  };


function HooksCakeContainer() {

    const numOfCakes = useSelector((state:CakeState) => state.cake.numOfCakes)
    const dispatch = useDispatch();

    return (
      <>
        <h1>number of Cakes: {numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>buy cake</button>
      </>
    );
  }
  
  export default HooksCakeContainer;
  