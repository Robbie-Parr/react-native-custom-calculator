import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';

import useData from './useData';


const InputGrid = () => {
    const data = useData()

    return(
        <View style={styles.container}>
            {data.map((row,n) => 
                <View style={styles.row} key={n}>
                {row.map(props => 
                    <Card 
                        key={props.displayValue} 
                        {...props}/>
                )}
                </View>
            )}
        </View>
    )
}

export default InputGrid;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"column",
    },

    row: {
        flex:1,
        backgroundColor:"lightgrey",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
    }
    
  });