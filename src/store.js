import {configureStore} from '@reduxjs/toolkit'
import user from '@auth/userSlice'
import dashboard from '@dashboard/dashboardSlice'

export default configureStore({
    reducer: {
        user,
        dashboard
    }
})