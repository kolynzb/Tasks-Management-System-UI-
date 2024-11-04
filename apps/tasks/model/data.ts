import {createSlice} from "@reduxjs/toolkit"
import { LightMode } from "../theme/theme"
import { State } from "../types"

const initialState: State = {
    user: {
        email: "kigongovincent81@gmail.com",
        role: "admin",
        user_id: 1,
        contact: "0756643681"
    },
    theme: LightMode
}

export const DataSlice = createSlice({
    initialState,
    name: "data_slice",
    reducers: {
        setTheme: (state, action)=>{
            state.theme = action.payload
        }
    }
})

export const getTheme = (state: any)=>state?.data?.theme

export default DataSlice.reducer

