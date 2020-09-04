import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from './userSlice';
import AuthForm from './Auth-view';

export default function SignInSide() {
  const [showPass, setShowPass] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [user, setUser] = useState("admin")
  const [password, setPassword] = useState("qwerty")
  const dispatch = useDispatch()

  const history = useHistory()

  function onChangeInput(handle, e) {
    handle(e.target.value);
  }

  const onSubmitAuth = (e) => {
    e.preventDefault()
    if (rememberMe) { 
      localStorage.setItem('auth', user) 
    } else {
      sessionStorage.setItem('auth', user)
    }

    if(user == 'admin' && password == 'qwerty') {
      dispatch(setUsername({user}))
      history.push('/Dashboard')
    } else {
      setShowAlert(true)
      let timer = setTimeout(()=>{setShowAlert(false); clearTimeout(timer);},3000)
    }
  }

  return (
  <AuthForm 
    showAlert={showAlert}
    onSubmitAuth={onSubmitAuth}
    user={user}
    setUser={setUser}
    onChangeInput={onChangeInput}
    password={password}
    setPassword={setPassword}
    rememberMe={rememberMe}
    setRememberMe={setRememberMe}
    showPass={showPass}
    setShowPass={setShowPass}
  />);
}
