import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import store from "../../redux/store"
import { create_Evaluate,create_Clear,create_RemoveLast } from '../../redux/actions';

import EvaluateCard from './EvaluateCard';

const ResultGrid = () => {
    return(
        <View style={styles.container}>
            {/**<EvaluateCard displayValue='=' onPress={() => store.dispatch(create_Evaluate())}/> */}
            <EvaluateCard displayValue='Clear' onPress={() => store.dispatch(create_Clear())}/>
            <EvaluateCard displayValue='Delete' onPress={() => store.dispatch(create_RemoveLast())}/>
        </View>
    )
}

export default ResultGrid;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection:"column",
      width:"100%"
    }
    
  });