import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
// reducer allows us to grab parts of the store [state] we want to access.  
    reducer:{
        // articleApi is used as the reducer here.
        [articleApi.reducerPath]: articleApi.reducer
    },
// what you pass into the .concat() of the middleware makes the reducer work.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})