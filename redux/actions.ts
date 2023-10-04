export const ADD_SYMBOL = "ADD_SYMBOL"
export const CLEAR = "CLEAR"
export const EVALUATE = "EVALUATE"
export const REMOVE_LAST = "REMOVE_LAST"
export const NEW_EQUATION = "NEW_EQUATION"

export const create_AddSymbol = (displaySymbol:string,inputSymbol:string) => ({
    type:ADD_SYMBOL,
    payload:{displaySymbol,inputSymbol}
})

export const create_Evaluate = () => ({
    type:EVALUATE,
    payload:{}
})

export const create_Clear = () => ({
    type:CLEAR,
    payload:{}
})

export const create_RemoveLast = () => ({
    type:REMOVE_LAST,
    payload:{}
})

export const create_NewEquation = (displayValue:string,inputSymbol:string) => ({
    type:NEW_EQUATION,
    payload:{equation:{displayValue,symbol:inputSymbol}}
})