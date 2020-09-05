import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isFetching: false,
    contacts: []
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setContacts(state, action) {
            state.contacts = action.payload
            state.isFetching = false
        },
        fetching(state, action) {
            state.isFetching = true
        }
    }
})

export const {setContacts, fetching} = dashboardSlice.actions
export default dashboardSlice.reducer;