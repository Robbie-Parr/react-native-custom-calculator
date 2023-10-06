import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { create_AddSymbol } from '../../redux/actions';
import store from '../../redux/store';

type Props = {
    displayValue:string,
    symbol:string,
}

const Card = ({displayValue,symbol}:Props) => {
    return(
        
        <TouchableOpacity 
            onPress={() => 
                store.dispatch(create_AddSymbol(displayValue,symbol))}
            style={styles.container}>
            <Text style={{color:"yellow"}}>{displayValue}</Text>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      margin:"3%",
      padding:"2%",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });