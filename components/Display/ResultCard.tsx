import React,{useMemo} from 'react';
import { View,Text, TouchableOpacity,StyleSheet, GestureResponderEvent } from "react-native"

type Props = {
    displayValue:string,
    onPress?:(event: GestureResponderEvent) => void,
    flex?:number
    limit?:number
}

const ResultCard = ({displayValue,onPress=() => {},flex=1,limit=10}:Props) => {
    const overflowX = useMemo(() => displayValue.length<0 ? "hidden" : "scroll",[displayValue.length])
    //console.log(overflowX)//Not currently working

    let transformedDisplayValue=""+displayValue
    transformedDisplayValue = transformedDisplayValue.length>limit ? transformedDisplayValue.slice(0,limit) : transformedDisplayValue
    
    return(
        <TouchableOpacity 
            onPress={onPress} 
            style={{...styles(overflowX).container,
                flex:flex,
                }}>
            
            <Text>{transformedDisplayValue}</Text>
        </TouchableOpacity>
    )
}

export default ResultCard

const styles = (overflowX:string) => StyleSheet.create({
    container: {
      backgroundColor: 'whitesmoke',
      width:"5%",
      margin:"3%",
      padding:"1%",
      alignItems:"center",
      overflowX:{overflowX}
    },
  });