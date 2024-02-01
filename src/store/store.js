import { configureStore } from "@reduxjs/toolkit";
import { authSlice, bookSlice } from "./";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        book: bookSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})