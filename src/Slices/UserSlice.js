import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : {},
}

const userSlice = createSlice({
    name: "cart",
    initialState,
    reducers: { 
        currentUser: (state, action) => {
            const user_data = action.payload
            state.user = user_data 
            localStorage.setItem("user", JSON.stringify(state.user))
            toast.success("Welocome to Bewkoof")
        },
        loggedOutUser: (state,action) => {
            state.user = []  
            localStorage.setItem("user", [])      
        }  
    }
})

export const { currentUser,loggedOutUser} = userSlice.actions
export default userSlice.reducer;