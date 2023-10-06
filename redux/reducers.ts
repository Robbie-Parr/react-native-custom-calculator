import { AnyAction } from "@reduxjs/toolkit";

import { 
    ADD_SYMBOL, 
    CLEAR,
    EVALUATE,
    NEW_EQUATION,
    REMOVE_LAST
 } from "./actions";

const Reducer = (state:any,action:AnyAction) => {
    switch(action.type){
        case ADD_SYMBOL:
            const {displaySymbol,inputSymbol} = action.payload
            state.inputValue ??= ""
            state.displayValue ??= ""
            let last:{lastDisplaySymbol:string,lastInputSymbol:string}[] = []
            if(state.last){
                last = [...state.last]
            }
            return {...state,
                inputValue:state.inputValue+inputSymbol,
                displayValue:state.displayValue+displaySymbol,
                last:[{
                    lastDisplaySymbol:displaySymbol,
                    lastInputSymbol:inputSymbol
                },...last]
            }
        case CLEAR:
            let saveEquationsState:{lastDisplaySymbol:string,lastInputSymbol:string}[] = []
            try{
            if(state.createdEquations){
                saveEquationsState = [...state.createdEquations]
            }
            }catch(e){
                //
            }
            return {...state,
                inputValue:"",
                displayValue:"",
                result:"=",
                last:[],
                createdEquations:saveEquationsState
            }
        case EVALUATE:
            let result = ""
            try{
                result = eval(state.inputValue)
            }catch(e){
                //console.log(e)
                result="!"
            }finally{
                if(!result && result!="0"){
                    result="?"
                }
            }
            
            return {...state,
                result:result
            }
        case REMOVE_LAST:
            if(state.last.length==0){
                return {...state}
            }
            const {lastDisplaySymbol,lastInputSymbol} = state.last[0]
            let newLast = state.last.slice(1,state.last.length)
            return {...state,
                displayValue:state.displayValue.slice(0,state.displayValue.length-lastDisplaySymbol.length),
                inputValue:state.inputValue.slice(0,state.inputValue.length-lastInputSymbol.length),
                last:newLast
            }
        case NEW_EQUATION:
            const {equation} = action.payload
            let newCreatedEquations:{lastDisplaySymbol:string,lastInputSymbol:string}[] = [equation]
            if(state.createdEquations){
                newCreatedEquations = [...state.createdEquations,equation]
            }
            return {...state, createdEquations:newCreatedEquations}
    }
}

export default Reducer