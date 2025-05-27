import {View,StyleSheet, Button, Text, TextInput,ScrollView } from 'react-native'
import { useState } from 'react'
import { CheckBox, Divider, Overlay } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useStopwatch } from 'react-timer-hook';
import TimerDroid from './StopwatchDroid';
import TimeriOS from './StopwatchiOS';
import { useDispatch } from 'react-redux';
import { lastUsed } from '../../redux/slices/lastUsedIDs';



export default function Newtask({newTask, setNewTask}){
    

    const [rest, setRest] = useState(false)
    const [jsonFile, setJsonFile] = useState(false)
    const [plistFile, setplistFile] = useState(false)
    const [googleAuth, setgoogleAuth] = useState(false)
    const [fcmReg, setfcmReg] = useState(false)
    const [iconScreen, seticonScreen] = useState(false)
    const [droidTimer, setDroidTimer] = useState(false)
    const [iOSTimer, setIosTimer] = useState(false)

    const [storeId, setStoreId] = useState('')
    const [fireBaseID, setFirebaseId] = useState('')
    const [appStoreID, setAppStoreID] = useState('')
    const [playStoreID, setPlayStoreID] = useState('')
    const [defValue, setDefValue] = useState(false)
    const [timerBool, setTimerBool] = useState(false) 

    const dispatch = useDispatch()


    const {
    start,
      } = useStopwatch({ autoStart: false });

  function showTimerDroid(){
    setDroidTimer((prev)=>!prev)
    start()
  }

  function showTimerIos(){
    setIosTimer((prev)=>!prev)
  }


    async function handleRest(){
        setRest((prev)=> !prev)
        setDefValue((prev)=> !prev)
        dispatch(lastUsed({storeId : storeId, fireBaseID : fireBaseID, appStoreID : appStoreID, playStoreID :  playStoreID}))
        
            try{
                const data = await fetch('http://localhost:3030/addFS',{
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        storeId,
                        fireBaseID,
                        appStoreID,
                        playStoreID
                    })

                })

            }catch(e){
                console.log(e.message, 'Error')
            }

    }

    


    return(
        <Overlay
        visible={newTask}
        onDismiss={!newTask}
        transparent={true}
        animationType='slide'
        overlayStyle={{height : "auto", width : "auto"}}
        >
            <ScrollView>
            <View style={styles.modalSetUp}>
                
                    <View style={styles.insideModal}>
                    <Icon name='remove' size={20} onPress={()=> {setNewTask((prev)=> !prev)}} />
                    <Text style={styles.newSetUpFont}>Set up your new App</Text>
                    <View></View>
                    </View>

                    <View style={styles.mainContentProvider}>  
                       
                    <View style={styles.insideContentMatter}>
                            <Text style={styles.texters}>     Store ID </Text>
                            <Text> : </Text>
                            <TextInput  
                            style={styles.txtInps} 
                            onChangeText={!defValue ? (e)=> setStoreId(e) : null}
                            editable={!defValue}
                            value={storeId}
                            defaultValue={storeId}
                            />
                            <View></View>
                    </View>

                     <View style={styles.insideContentMatter}>
                            <Text style={styles.texters}>Firebase ID </Text>
                            <Text> : </Text>
                            <TextInput  
                            style={styles.txtInps}
                            defaultValue={fireBaseID}
                            editable={!defValue}
                            onChangeText={!defValue ? (e)=>setFirebaseId(e) : null}
                            value={fireBaseID}
                            />
  
                            <View></View>
                        </View>

                    <View style={styles.insideContentMatter}>
                            <Text style={styles.texters}>Appstore ID </Text>
                            <Text> : </Text>
                            <TextInput  
                            style={styles.txtInps}
                            onChangeText={!defValue ? (e)=>setAppStoreID(e) : null}
                            editable={!defValue}
                            value={appStoreID}
                            defaultValue={appStoreID}
                            />
                            <View></View>
                    </View>

                    <View style={styles.insideContentMatter}>
                            <Text style={styles.texters}>Playstore ID </Text>
                            <Text> : </Text> 
                            <TextInput  
                            style={styles.txtInps}
                            onChangeText={!defValue ? (e)=>setPlayStoreID(e) : null}
                            editable={!defValue}
                            value={playStoreID}
                            defaultValue={playStoreID}
                            />
                            <View></View>
                    </View>
            
                    </View>

                    <View style={styles.btnArea}>

                        <Button title='Submit'  onPress={handleRest}/>
                    </View>


            {rest ?
            
             <View>

                <CheckBox
                title="FCM Registration File" 
                checked={fcmReg}
                onPress={()=> setfcmReg((prev)=> !prev)}
                />


                <CheckBox
                title="JSON File" 
                checked={jsonFile}
                onPress={()=> setJsonFile((prev)=> !prev)}
                />

                <CheckBox
                title="Plist File" 
                checked={plistFile}
                onPress={()=> setplistFile((prev)=> !prev)}
                />


                <CheckBox
                title="Google Authentication" 
                checked={googleAuth}
                onPress={()=> setgoogleAuth((prev)=> !prev)}
                />
                


                <CheckBox
                title="Splash Screen / App Icon" 
                checked={iconScreen}
                onPress={()=> seticonScreen((prev)=> !prev)}
                />



            <View style={styles.mainHorizon}>
            <Divider width={5} color='grey' />
            
            <View style={styles.horizonBuilds}>
            <View style={styles.buildNames}>
                <Icon name='android' size={40} />
                <Text>Droid Build</Text>
                
                {droidTimer ? 
                 <View style={styles.timerFunc}>    
                    <TimerDroid timerBool={timerBool} setTimerBool={setTimerBool}/>
                </View>

                : 
                <Button title='Build Initiated' onPress={showTimerDroid}/>

            }
            

            </View>

            <View style={styles.smallKodu}></View>

            <View style={styles.buildNames}>
                <Icon name='apple' size={40} />
                <Text>iOS Build</Text>
                {iOSTimer ?
                <View style={styles.timerFunc}>    
                   <TimeriOS timerBool={timerBool} setTimerBool={setTimerBool}/>
                </View>
                
                :

                <Button title='Build Initiated' onPress={showTimerIos}/>
                }
                

            </View>
            </View>
    

                
            </View>
            

            </View>
            :
            null}


            </View>



             </ScrollView>
        </Overlay>
    )
}


const styles = StyleSheet.create({
    modalSetUp :{
        flex : 1,
        flexDirection : "column",
        width : 400,
        height : 900,
        margin : "auto",
        backgroundColor : "white",
        paddingBottom : 10
    },
    insideModal : {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    newSetUpFont : {
        fontSize : 20,
        paddingTop : 20
    },
    mainContentProvider : {
        flexDirection : "column",
        marginTop : 30
    },
    insideContentMatter : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        padding : 20
    },
    txtInps : {
        borderWidth : 2,
        width : "70%"
    },
    texters :{
        fontSize : 16
    },
    underLineBtn :{
        width : 50 
    },
    btnArea :{
        margin : "auto",
        width : "auto",
    },
    mainHorizon: {
        width : "100%",
    },  
    horizonBuilds :{
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems: "center",
        paddingTop : 10
    },
    smallKodu : {
        borderWidth :2,
        height : "100%"
    },
    buildNames : {
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center"
    },
    timerFunc : {
        flexDirection : "row"
    }
})