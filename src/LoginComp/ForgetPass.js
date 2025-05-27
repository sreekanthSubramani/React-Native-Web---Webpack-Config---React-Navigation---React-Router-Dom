import {View, StyleSheet, Text, Button, TextInput,Modal, useWindowDimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ForgetPass({forgetPass, setForgetPass}){

        const {height, width} = useWindowDimensions()
        const saidHeight = Number(parseFloat(height / 1.5))
        const saidWidth = Number(parseFloat(width / 2))


    return(
        <Modal
        transparent={true}
        visible={forgetPass}
        animationType='slide'
        >
            
            <View style={[styles.modalStyle, {height : saidHeight, width : saidWidth}]}>
                <Icon name="remove" size={20} color="black" onPress={()=> setForgetPass(false)}/>
                <Text>Enter your Email Address : </Text>
                <TextInput />
                <Button title='Forget Password' />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalStyle : {
        margin : 'auto',
        borderRadius : 5,
        backgroundColor : "white",
        boxShadow : 20,
        justifyContent : "center",
        alignItems: "center",
        borderWidth : 2,
        gap : 20
    }

})