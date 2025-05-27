import {View, StyleSheet, Button, Text} from 'react-native'

export default function Note(){
    return(
        <View style={styles.mainFlex}>
            <Text>Hai This is Note</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    mainFlex : {
        flex : 1
    }
})