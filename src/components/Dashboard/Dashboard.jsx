import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setContacts } from './dashboardSlice.js'

const Dashboard = () => {
    const dispatch = useDispatch()
    const user = sessionStorage.getItem('auth') || localStorage.getItem('auth')
    useEffect(()=> {
        async function getContacts() {
            try {
                let contacts = await fetch('http://localhost:3001/users')
                contacts = await contacts.json()
                dispatch(setContacts({contacts}))
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err.toString())
            }
        }
        getContacts()
    }, [])
    return (<>
        <h1>Hello, {user}</h1>
    </>)
}
export default Dashboard