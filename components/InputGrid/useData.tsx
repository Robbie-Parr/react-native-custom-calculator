import React,{useState,useEffect} from 'react';

import { useSelector } from 'react-redux';


import store from "../../redux/store";

const basicData = [
    {displayValue:"7",symbol:"7"},
    {displayValue:"8",symbol:"8"},
    {displayValue:"9",symbol:"9"},
    {displayValue:"+",symbol:"+"},
    {displayValue:"4",symbol:"4"},
    {displayValue:"5",symbol:"5"},
    {displayValue:"6",symbol:"6"},
    {displayValue:"-",symbol:"-"},
    {displayValue:"1",symbol:"1"},
    {displayValue:"2",symbol:"2"},
    {displayValue:"3",symbol:"3"},
    {displayValue:"×",symbol:"*"},
    {displayValue:"0",symbol:"0"},
    {displayValue:".",symbol:"."},
    {displayValue:"(",symbol:"("},
    {displayValue:"÷",symbol:"/"},
    {displayValue:"sin(",symbol:"Math.sin("},
    {displayValue:"cos(",symbol:"Math.cos("},
    {displayValue:")",symbol:")"},
    {displayValue:" MOD ",symbol:"%"},
]

const useData = () => {
    const splitUp = (dataToSplitUp:{displayValue:string,symbol:string}[],n:number=4) => {
        let splitUpData:{displayValue:string,symbol:string}[][] = []
        let currentIndex = -1
        for(let i:number=0;i<dataToSplitUp.length;i++){
            if(i%n===0){
                currentIndex++;
                splitUpData.push([])
            }
            splitUpData[currentIndex].push(dataToSplitUp[i])
        }

        return splitUpData
    }

    const [data,setData] = useState(basicData)
    const [displayedData,setDisplayedData] = useState(splitUp(basicData))

    const addData = (values:[{displayValue:string,symbol:string}]) => {
        const newData = [...basicData,...values]
        setData(newData)
        setDisplayedData(splitUp(newData))
        
    }

    const {createdEquations} = useSelector((state:any) => 
        ({createdEquations:state.createdEquations})
    )

    useEffect(() => {
        addData(createdEquations)
    },[createdEquations])

    return displayedData
}

export default useData