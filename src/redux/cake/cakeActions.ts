import { BUY_CAKE } from "./cakeTypes";

export default function buyCake(num=1){
    return {
        type: BUY_CAKE,
        payload: num
    }
}