import {configureStore} from '@reduxjs/toolkit'
import notesReducer from '../slices/notesSlice'
import timerBoolReducer from '../slices/timerSlice'
import lastUsedID from '../slices/lastUsedIDs'

export const storeConfig = configureStore({
    reducer : {
        notesReducer : notesReducer,
        timerBoolServices : timerBoolReducer,
        lastUsed : lastUsedID
    }
})