import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';

import useData from './useData';


const InputGrid = () => {
    const data = useData()

    console.log(data)

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
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"column",
      paddingBottom:"80%"
    },

    row: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
    }
    
  });