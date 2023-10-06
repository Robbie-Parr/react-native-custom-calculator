import React,{useState} from 'react';
import { View,Text, TouchableOpacity,StyleSheet, TextInput } from "react-native"

import { useSelector } from 'react-redux';

import store from "../../redux/store";
import { create_Evaluate, create_NewEquation } from '../../redux/actions';

import ResultCard from './ResultCard';

const Display = () => {
    const {displayValue,inputValue,result} = useSelector((state:any) =>
        ({
            displayValue:state.displayValue,
            inputValue:state.inputValue,
            result:state.result
        }))

    const [customInputSymbol,setCustomInputSymbol] = useState("")
    
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TextInput 
                    style={styles.textInput}
                    value={customInputSymbol} 
                    onChangeText={text => setCustomInputSymbol(text)}/>
                <ResultCard 
                    displayValue={displayValue}
                    flex={.95}
                    onPress={() => {
                        if(customInputSymbol.length===0 || inputValue.length===0){
                            return
                        }
                        store.dispatch(create_NewEquation(customInputSymbol,"("+inputValue+")"));
                        setCustomInputSymbol("")
                        }}
                    limit={28}/>
            </View>
            <ResultCard 
                displayValue={result} 
                flex={.2}
                onPress={() => store.dispatch(create_Evaluate())}/>
        </View>
    )
}

export default Display;

const styles = StyleSheet.create({
    container: {
      flex: .1,
      backgroundColor: "grey",
      alignItems: 'center',
      justifyContent: "space-around",
      flexDirection:"row",
      width:"100%",
      paddingTop:"10%"
    },
    innerContainer:{
        display:'flex',
        flexDirection:"row",
        flex:1.3,
        backgroundColor:"#9b9b9b",
        marginLeft:"2%"
    },
    textInput:{
        flex:.05,
        width:"5%",
        backgroundColor:"whitesmoke",
        margin:"3%",
        padding:"1%",
    }
  });