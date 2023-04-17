import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isActive = true;
        },
        closeModal: (state, action) => {
            state.isActive = false;
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;