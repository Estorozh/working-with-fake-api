import React, {useEffect, useState} from 'react'
import { useDispatch, useStore } from 'react-redux'
import { setContacts, fetching } from './dashboardSlice.js'

const Dashboard = () => {
    const dispatch = useDispatch()
    const user = sessionStorage.getItem('auth') || localStorage.getItem('auth')
    let store = useStore()
    const [isFetching, setFetching] = useState(getStatus())
    
    function getStatus() {
        return store.getState().dashboard.isFetching
    }
    function displayContacts() {
        return Object.values(store.getState().dashboard.contacts).map(arr => {
            return arr.map(Obj => (<p key={Obj.id}>{Obj.phone}</p> ) )
        })
    }

    useEffect(()=> {
        dispatch(fetching())
        setFetching(getStatus())
        async function getContacts() {
            try {
                let contacts = await fetch('http://localhost:3001/users')
                contacts = await contacts.json()
                dispatch(setContacts({contacts}))
                setFetching(getStatus())
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(err.toString())
            }
        }
        getContacts()
    }, [])

    return (<>
        <h1>Hello, {user}</h1>
        <div>
            {isFetching ? "Loading..." : displayContacts() }
        </div>
    </>)
}
export default Dashboard