import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoadingBooks: true,
        books: [],
        activeBook: null,
        recommendations: [],
        ratingByIsbn: null,
    },
    reducers: {
        onSetActiveBook: ( state, { payload }) => {
            state.activeBook = payload;
        },
        onLoadBooks: (state, { payload = [] }) => {
            state.isLoadingBooks = false;
            state.books = payload;
        },
        onLoadRecommendations: (state, { payload = [] }) => {
            state.isLoadingBooks = false;
            state.recommendations = payload;
        },
        onLoadRatingByIsbn: ( state, { payload }) => {
            state.ratingByIsbn = payload;
        },
    }
});

export const { 
    onSetActiveBook, 
    onLoadBooks,
    onLoadRecommendations,
    onLoadRatingByIsbn
} = bookSlice.actions;