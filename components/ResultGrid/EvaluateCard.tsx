import React from 'react';
import { View,Text, TouchableOpacity,StyleSheet, GestureResponderEvent } from "react-native"

type Props = {
    displayValue:string,
    onPress?:(event: GestureResponderEvent) => void,
}

const EvaluateCard = ({displayValue,onPress=() => {}}:Props) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>{displayValue}</Text>
        </TouchableOpacity>
    )
}

export default EvaluateCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gold',
        margin:"5%",
        padding:"5%",
        alignItems:"center",
        justifyContent: 'center',
    },
  });