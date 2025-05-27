import {View, StyleSheet, Button, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useCallback, useMemo, useState} from 'react'
import { Card } from '@rneui/themed';


export default function Timer(){

    const [play , setPlay] = useState(false)
    const [dayEnd , setDayEnd] = useState(false)
    const [msecond, setMsecond] = useState({
         hrs : "",
         mins : ""
    })

    function playPauseBtn(){
        setPlay((prev)=> !prev)
    }

    function endDayBtn(){
        setDayEnd((prev)=> !prev)
    }

const theTimerComp = ()=>useMemo(()=>{
     setInterval(() => {
        const date = new Date();
        const hrs = date.getHours();
        const mins = date.getMinutes();
        setMsecond({hrs : hrs, mins : mins})
    }, 1000);
})



const withZeroPref=()=> useMemo(()=>{
    const toStrConv = msecond.hrs.toString()
    if(toStrConv.split().length == 1){
        return `0${toStrConv}`
    }
})

const withZeroPrefMin = ()=>useMemo(()=>{
    const toStrConv = msecond.mins.toString()

     if(toStrConv.split('').length <= 1){   
        return `0${toStrConv}`
    }else{
        return toStrConv
    }
})

theTimerComp()

function findAMorPM(){
    const newDate = new Date()
    const hrsFind = newDate.getHours()
    if(hrsFind < 12){
        return 'AM'
    }else{
        return 'PM'
    }
}



    return(
        <View style={styles.mainFlex}>
            <View style={styles.insideDivFlex}>
            <Card>
                {!dayEnd ? 
                <Card.Title> {!play && !dayEnd? "Start your Day" : "Day Started"} </Card.Title>
                :
                <Card.Title> {"Done for the day"} </Card.Title>}
                <Card.Divider/>
                <View style={styles.startBtn}>
                {!play && <Icon name='play' size={150} color='red' onPress={playPauseBtn}/>}
                {play && !dayEnd && <Icon name='pause' size={150} color='red' onPress={endDayBtn}/>}
                {dayEnd && <Icon name='stop' size={150} color='red' /> }
                </View>
            </Card>
            <View style={styles.timerDiv}>
              <Text style={styles.timerTxt}>{withZeroPref()} : {withZeroPrefMin()} {findAMorPM()}</Text>
            </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    mainFlex : {
        height : "80dvh",
        width : "100%",
    },
    insideDivFlex :{
        margin : "auto",
        width : "auto"
    },
    startBtn:{
        borderRadius : 100,
        margin : "auto"
    },
    timerDiv:{
        margin : "auto",
        paddingTop : 30,
    },
    timerTxt : {
        fontSize : 30
    }
})