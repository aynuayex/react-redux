import { BUY_ICECREAM } from './iceCreamTypes';

export default function buyIceCream(num=1){
    return {
        type: BUY_ICECREAM,
        payload: num
    }
}