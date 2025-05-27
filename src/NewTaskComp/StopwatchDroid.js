import {View, Text, StyleSheet} from 'react-native'
import { useStopwatch } from 'react-timer-hook';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function TimerDroid({timerBool, setTimerBool}){

        const {
        seconds,
        minutes,
        hours,
        pause
      } = useStopwatch({ autoStart: true });



    return(
      <>
             <View style={styles.timerFunc}>
              <View style={styles.timerFunc}>
                    <Text>{String(hours).padStart(2, '0')}:</Text>
                    <Text>{String(minutes).padStart(2, '0')}:</Text>
                    <Text>{String(seconds).padStart(2, '0')}</Text>
            </View>

            <Icon name='pause' color='red' size={20} onPress={()=> pause()}/>
            </View>
           
       </>

    )
}

const styles = StyleSheet.create({
      timerFunc : {
        flexDirection : "row",
        paddingRight : 5
    }
})