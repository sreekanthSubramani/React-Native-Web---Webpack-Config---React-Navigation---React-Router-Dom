import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    lastUsedArray : []
}

export const lastUsedId = createSlice({
    name : "last used Id",
    initialState : initialState,
    reducers : {
        lastUsed : (state, action)=>{
            const {storeId, fireBaseID, appStoreID, playStoreID} = action.payload
            state.lastUsedArray.push({storeId : storeId, fireBaseID : fireBaseID, appStoreID : appStoreID , playStoreID : playStoreID})
        }
    }
})

export const {lastUsed} = lastUsedId.actions;
export default lastUsedId.reducer
