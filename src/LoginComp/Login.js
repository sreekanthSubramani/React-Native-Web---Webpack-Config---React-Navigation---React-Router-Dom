import {View, StyleSheet, Text, Button, useWindowDimensions, TextInput, FlatList, Pressable} from 'react-native'
import { useState } from 'react'
import ModalFunc from './ModalFunc'
import ForgetPass from './ForgetPass'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function LoginComponent(){

    const {height, width} = useWindowDimensions()
    const saidHeight = Number(parseFloat(height/3))
    const saidWidth = Number(parseFloat(width/3))

    const [help, setHelp] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [forgetPass, setForgetPass] = useState(false)

    const helperArray = ['Sign up', 'Forget Password']


    function helpPage(){
        setHelp((prev)=> !prev)
    }   

    function assignedFunc(text){
        if(text == "Sign up"){
            setSignUp((prev)=> !prev)
        }else{
            setForgetPass((prev)=> !prev)
        }
    }


    function RetreiveHelper(){
        return(
        <View style={styles.helperView}>
       <FlatList
            data={helperArray}
            renderItem={({item})=>{
            return(
                    <View style={styles.insideView}>
                    <Pressable onPress={()=> assignedFunc(item)}>
                    <Text style={styles.innerText}>{item}</Text>
                    </Pressable>    
                    </View>
                )}}
            keyExtractor={(_,index)=> index}
                />
        </View>
            )}


    return(
        <View style={styles.overall}>
            {signUp ? <ModalFunc signUp={signUp} setSignUp={setSignUp} /> : null}
            {forgetPass ? <ForgetPass forgetPass={forgetPass} setForgetPass={setForgetPass} /> : null}
            <View style={{margin : "auto", height : saidHeight, width : saidWidth}}> 
                <View style={styles.insideCont}>
                    
                    <View style={styles.iconSty}>
                    <Icon name="align-justify" size={20} color="black" onPress={helpPage}/>
                    <View>
                    {help ? <RetreiveHelper /> : null}
                    </View>
                    </View>         

                    
                    <Text style={{fontSize : 30}}>Login</Text>
                    <TextInput style={styles.txtInp} placeholder='Enter your email' placeholderTextColor={"grey"}/>
                    <TextInput style={styles.txtInp} placeholder='Enter your password' placeholderTextColor={"grey"}/>

                    <Button title='Submit' />
                  
                </View>
            </View>
        </View>

    )
}


  

const styles = StyleSheet.create({
    overall:{
        height : '90dvh',
        width : '100dvw'
    },
    txtInp :{
        width : "100%",
        height : "100%",
        borderBottomWidth : 1,
        fontSize : 24
    },
    insideCont :{
        flexDirection : "column",
        justifyContent : "center",
        alignItems : 'center',
        gap : 50
    },
    iconSty : {
        width : "100%",
        justifyContent : "flex-end",
        alignItems : "flex-end",
    },
    helperView :{
        position : "absolute", 
        borderWidth : 1, 
        width : 100, 
        gap : 10
    },
    insideView :{
        flex : "row",
        gap : 20, 
        rowGap : 30, 
        height : "auto", 
        borderWidth : 0.5, 
        padding : 4
    },
    innerText :{
        fontSize : 14
    }

})