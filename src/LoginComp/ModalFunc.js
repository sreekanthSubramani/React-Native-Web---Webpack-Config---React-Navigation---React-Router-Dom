import {Modal, View, Text, Pressable, StyleSheet, useWindowDimensions,TextInput, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function ModalFunc({signUp, setSignUp}){
    const {height, width} = useWindowDimensions()
    const saidHeight = Number(parseFloat(height / 1.5))
    const saidWidth = Number(parseFloat(width / 2))

    return(
        <Modal 
        animationType='slide'
        visible={signUp}
        transparent={true}

        >
            <View style={[styles.modalStyle, {height : saidHeight, width : saidWidth}]}>
                     <Icon name="remove" size={20} color="black" onPress={()=> setSignUp(false)}/>
                 
                <View style={styles.insideModal}>
                    <Icon name="dot-circle-o" size={40} color="black"/>
                    <Text style={styles.headingTitle}>Task Eye - Sign Up</Text>
                    <Text>Username : </Text>
                    <TextInput style={styles.txtInp}/>

                    <Text>Email Address : </Text>
                    <TextInput style={styles.txtInp}/>

                    <Text>Password : </Text>
                    <TextInput style={styles.txtInp}/>

                    <Button title="Sign Up" />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modalStyle : {
        margin : 'auto',
        borderRadius : 5,
        backgroundColor : "white",
        boxShadow : 20
    },
    insideModal: {
        alignItems : "center",
        justifyContent : "center",
        flexDirection : "coloumn",
        gap : 20,
        marginTop : 40
    },
    txtInp : {
        borderWidth  : 2
    },
    headingTitle : {
        fontSize : 24
    }
})