import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Provider } from 'react-redux';
import store from "./redux/store"

import { create_Evaluate,create_Clear } from './redux/actions';

import InputGrid from './components/InputGrid';
import Display from './components/Display';
import ResultGrid from './components/ResultGrid';

export default function App() {
  const [hydration,setHydration] = useState(false)

  useEffect(() => {
    store.dispatch(create_Clear())
    setHydration(true)
  },[])

  return (
    <Provider store={store}>
    {hydration && <View style={styles.container}>
        <Display/>
      <View style={styles.innerContainer}>
        <View style={styles.split80}>
          <InputGrid/>
        </View>
        <View style={styles.split20}>
          <ResultGrid/>
        </View>
      </View>
    </View>}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
    alignContent:"center",
    justifyContent:"center",
  },
  innerContainer: {
    flexDirection:"row",
    flex:.95
  },
  split20:{
    flex:.2,
  },
  split80:{
    flex:.8
  }
});
