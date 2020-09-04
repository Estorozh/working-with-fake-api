import {createSlice} from '@reduxjs/toolkit'
const initialState = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername(state, action) {
            state.user = action.payload.user
        }
    }
})

export const {setUsername} = userSlice.actions
export default userSlice.reducer;