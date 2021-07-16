import { BUY_CAKE , ADD_CAKE} from './type';

export const buyCake = (number = 1) => {
    //default value is 1 bcoz it should not affect the other click events
    return {
        type: BUY_CAKE,
        payload: number
    }
}


export const addCake = (number = 5) => {
    return{
        type: ADD_CAKE,
        payload: number
    }
}
