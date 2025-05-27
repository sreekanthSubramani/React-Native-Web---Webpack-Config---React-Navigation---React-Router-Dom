import {View, Button, StyleSheet, Text, ScrollView} from 'react-native'
import * as React from 'react';
import { useState, useEffect } from 'react';





export default function NewTaskDetail(){



    const [storeDetails, setStoreDetails] = useState([])

    async function getStoreDetails(){
      try{
        const data = await fetch('http://localhost:3030/newTasks')
        const response = await data.json()
        setStoreDetails(response.message)
      }catch(e){
        console.log(e.message)
      }
    }

    useEffect(()=>{
      getStoreDetails()
    },[])

    console.log(storeDetails, 'check')
    
    return(
        <ScrollView>
        <View style={styles.fullScreenView}>

            {storeDetails.length >= -1?
             
                storeDetails.map((storeDetails, index)=>{
                  return(
                  <View>

                  </View>

                )})
                :
                null
                
               
            }

        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fullScreenView : {
        flex : 1
    }
})