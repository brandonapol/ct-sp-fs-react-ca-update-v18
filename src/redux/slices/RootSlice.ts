import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        email: 'Email',
        phone_number: "Phone Number",
        address: "Address",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseEmail: (state, action) => { state.email = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload },
        chooseAddress: (state, action) => { state.address = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhone, chooseAddress } = rootSlice.actions