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
            <Text>{displayValue}</Text>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      margin:"1%",
      padding:"1%",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });