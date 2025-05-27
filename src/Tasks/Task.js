import {View} from 'react-native'
import { PricingCard, lightColors } from '@rneui/themed';
import {useState} from 'react'
import Newtask from '../NewTaskComp/NewTask';
import {useSelector} from 'react-redux'




export default function TaskCode(){

      const myVal = useSelector(state=> state.lastUsed)
      const firstVal = myVal?.lastUsedArray
      const numberOfTask = firstVal?.length
      const checkData = firstVal?.length -1
      console.log(firstVal[checkData]?.storeId)
      console.log(firstVal?.length -1)


    const [newTask, setNewTask] = useState(false)

    
    function newTaskModal(){
        setNewTask((prev)=> !prev)
    }


    console.log('check if renders')


    return(
        <View style={{flex: 1, flexDirection : "row", gap : 30, flexWrap : 'wrap'}}>
        
        {newTask ? <Newtask 
        newTask={newTask} 
        setNewTask={setNewTask} 
        /> : null}

        <PricingCard
        color={lightColors.primary}
        title="New Task"
        price= {numberOfTask || 0}
        info={[`Store ID : ${firstVal[checkData]?.storeId || '' }`,
               `Firebase ID : ${firstVal[checkData]?.fireBaseID || ''}`,
               `Appstore ID : ${firstVal[checkData]?.appStoreID || ''}`,
                `Playstore ID : ${firstVal[checkData]?.playStoreID || ''}`]}
        button={{ title: ' GET STARTED', onPress : newTaskModal}}
        containerStyle={{width : 500}}
      />

        <PricingCard
        color={lightColors.warning}
        title="Bulk Build"
        price="0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
        containerStyle={{width : 500}}
      />



         <PricingCard
        color={lightColors.success}
        title="Reminder"
        price="0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
        containerStyle={{width : 500}}
      />

        <PricingCard
        color={lightColors.error}
        title="Others"
        price="0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
        containerStyle={{width : 500}}
      />

        </View>
    )
}

