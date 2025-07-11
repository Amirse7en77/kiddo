import { createSlice } from "@reduxjs/toolkit"

const initialState={
studySelectionButton:false
}


export const darsyarSlice=createSlice({
name:'darsyar',
initialState,
reducers:{
    activeButtonReducer:(state)=>{
        state.studySelectionButton=true
    },
     disableButtonReducer:(state)=>{
        state.studySelectionButton=false
    }
}
})
export const{activeButtonReducer,disableButtonReducer}=darsyarSlice.actions

export default darsyarSlice.reducer