import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import post from '../../api/post';
import { writeUser } from '../../redux/actions/actions';
import useWriteReduxAndLocalStorage from '../../customHooks/useWriteReduxAndLocalStorage';
import endPoint from '../../api/endPoint';

function useLogin() {
  const paddingBottom = { paddingBottom: '10px' };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoad(true);
    post({ email, password }, `${endPoint}/api/auth/login`)
      .then((res) => {
        if (res) {
          setLoad(false);
          useWriteReduxAndLocalStorage(dispatch, writeUser, res?.data, 'user');
          enqueueSnackbar('Вход выполнен', { variant: 'success' });
          navigate('/');
        }
      })
      .catch((error) => enqueueSnackbar(error.response.data.message, { variant: 'error' }))
      .finally(() => setLoad(false));
  };

  return {
    paddingBottom,
    setEmail,
    setPassword,
    load,
    handleLogin,
    email,
    password,
    navigate,
  };
}

export default useLogin;
