import React from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';
import Loading from '../Loading/Loading';
import useLogin from './useLogin';

function Login() {
  const {
    paddingBottom,
    setEmail,
    setPassword,
    load,
    handleLogin,
    email,
    password,
    navigate,
  } = useLogin();

  return (
    <Dialog open>
      <DialogTitle>
        Вход
      </DialogTitle>
      <DialogContent>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Почта" variant="standard" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Box>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Пароль" variant="standard" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => navigate('/registration')}
        >
          Регистрация
        </Button>
        <Button
          disabled={!!(!email || !password)}
          onClick={handleLogin}
        >
          Войти
        </Button>
      </DialogActions>
      {load && <Loading load={load} />}
    </Dialog>
  );
}

export default Login;
