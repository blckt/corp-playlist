import {INCREASE, DECREASE} from '../constants'

export function increase(n:number) {
    return {
        type: INCREASE,
        amount: n
    }
}

export function decrease(n:number) {
    return {
        type: DECREASE,
        amount: n
    }
}