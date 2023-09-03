import { connect } from "react-redux";
import buyCake from "../redux/cake/cakeActions";
import buyIceCream from "../redux/iceCream/iceCreamActions";

type ItemState = {
    cake:{
        numOfCakes: number
    },
    iceCream: {
        numOfIceCreams: number
    }
  };
type CakeProps = { cake?: boolean }

type ItemContainerProps = {
    Item: number;
    buyItem: () => ItemState;
    cake?: boolean
}
const  ItemContainer:React.FC<ItemContainerProps> = ({Item, buyItem , cake}) => {

return (
    <>
      <h1>number of {cake?"Cakes":"IceCreams"}: {Item}</h1>
      <button onClick={buyItem}>buy {cake?"Cakes":"IceCreams"}</button>
    </>
  );
}

const mapStateToProps = (state:ItemState,ownProps: CakeProps) => (ownProps.cake?{Item: state.cake.numOfCakes}:{Item: state.iceCream.numOfIceCreams})

const mapDispatchToProps = (dispatch: Function,ownProps: CakeProps) => ({buyItem: () => dispatch(ownProps.cake?buyCake():buyIceCream())})

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);
