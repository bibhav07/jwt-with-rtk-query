import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name : "auth",
    initialState : { user: null, token : null  },

    reducers : {

        setCredentials : (state, action)  => {
            const { user, accessToken  }  = action.payload;
            state.user  = user;
            state.token  = accessToken;
        },

        logOut: (state, action) => {
            state.user = null
            state.token = null
        }


    }
});

//making custom selectors
export const selectCurrentUser  = (state)  => state.auth.user;
export const selectCurrentToken  = (state)  => state.auth.token;


//exporting actions
export const {setCredentials, logOut}  = authSlice.actions;


//exporting the slice as reducer
export default authSlice.reducer;














