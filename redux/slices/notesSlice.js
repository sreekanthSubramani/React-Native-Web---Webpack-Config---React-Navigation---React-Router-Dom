import {createSlice} from '@reduxjs/toolkit'

const initialState = {

}

const notesSlice = createSlice({
     name : "notes slice",
     initialState : initialState,
     reducers:{
        addNotes : (action, payload)=>{},
        removeNotes : (action, payload)=>{}
     }
})

export const {addNotes, removeNotes} = notesSlice.actions
export default notesSlice.reducer
