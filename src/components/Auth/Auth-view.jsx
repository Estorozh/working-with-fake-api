import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styledAuth';

const AuthForm = (props) => {
    const {showAlert, onSubmitAuth, user, onChangeInput, setUser, password, 
        setPassword, setRememberMe, rememberMe, setShowPass, showPass} = props
    const classes = useStyles();
    return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            {showAlert && <Alert severity="error">Wrong password or username</Alert>}
          <form className={classes.form} noValidate onSubmit={onSubmitAuth} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="user"
              name="user"
              autoFocus
              value={user}
              onChange={onChangeInput.bind(this, setUser)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChangeInput.bind(this, setPassword)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" 
                onClick={()=>setRememberMe(!rememberMe)} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={()=>setShowPass(!showPass)}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://github.com/Estorozh" variant="body2">перейти в мой github</Link>
              </Grid>
            </Grid>
            {showPass && <p>Login - admin<br />Password - qwerty</p>}
          </form>
        </div>
      </Grid>
    </Grid>
    );
}

export default AuthForm;