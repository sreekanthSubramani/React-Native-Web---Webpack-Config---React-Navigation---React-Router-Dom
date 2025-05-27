import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const timerBool = createSlice({
    name : "Timer Bool",
    initialState,
    reducers : {
        addTimerData : (state, action)=>{
            const {storeId, droidTimer, iOSTimer } = action.payload
            const existingStore = state.find(item=> item.storeId === storeId)
            if(existingStore){
                existingStore.droidTimer = droidTimer;
                existingStore.iOSTimer = iOSTimer
            }else{
                state.push({storeId : storeId, droidTimer : droidTimer , iOSTimer : iOSTimer})
            }
        },
    }
})

export const {addTimerData} = timerBool.actions
export default timerBool.reducer
