import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewMode: 'list'
};

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        listMode: (state, action) => {
            state.viewMode = 'list';
        },
        gridMode: (state, action) => {
            state.viewMode = 'grid';
        }
    }
})

export const {listMode, gridMode} = viewSlice.actions;

export default viewSlice.reducer;