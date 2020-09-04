import {createSlice} from '@reduxjs/toolkit'

const initialState = {}
// () => async dispatch => {
//     // dispatch()
//     try {
//         let contacts = await fetch('http://localhost:3001/users')
//         console.log(contacts.json())
//         return contacts.json()
//     } catch(e) {
//         console.log(e.toString())
//     }
// }

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setContacts(state, action) {
            state.contacts = action.payload
        }
    }
})

export const {setContacts} = dashboardSlice.actions
export default dashboardSlice.reducer;