import { configureStore } from "@reduxjs/toolkit";
import agentApi from "./api/agentApi"
import { agentSlice } from "./slices/agentSlice";
export const store = configureStore({
    reducer:{
        [agentApi.reducerPath]:agentApi.reducer,
        agents: agentSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(agentApi.middleware),
    devTools:process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch