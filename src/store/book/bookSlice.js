import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoadingBooks: true,
        books: [],
        activeBook: null
    },
    reducers: {
        onSetActiveBook: ( state, { payload }) => {
            state.activeBook = payload;
        },
        onLoadBooks: (state, { payload = [] }) => {
            state.isLoadingBooks = false;
            state.books = payload;
        }
    }
});

export const { 
    onSetActiveBook, 
    onLoadBooks
} = bookSlice.actions;