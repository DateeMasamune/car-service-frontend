import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import post from '../../api/post';
import endPoint from '../../api/endPoint';

function useRegistration() {
  const [alignment, setAlignment] = useState('User');
  const [disabledButton, setDisabledButton] = useState(true);
  const [load, setLoad] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const paddingBottom = { paddingBottom: '20px' };
  const navigate = useNavigate();
  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexEnglishCharOnly = /^[A-Za-z][A-Za-z0-9]*$/;
  const {
    register, watch, handleSubmit, getValues, formState: { errors },
  } = useForm({ mode: 'onChange' });

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const watchFields = watch(['email', 'firstName', 'lastName', 'password']);

  const handleRegister = () => {
    const data = getValues();
    if (Object.keys(errors).length) {
      console.log('ФОРМА НЕ ОТПРАВЛЕНА');
    } else {
      setLoad(true);
      data.role = alignment;
      post(data, `${endPoint}/api/auth/register`)
        .then((res) => {
          if (res) {
            setLoad(false);
            enqueueSnackbar('Регистрация успешно пройдена', { variant: 'success' });
            navigate('/login');
          }
        })
        .catch((err) => {
          console.log('err', err);
          enqueueSnackbar(err.response.data.message, { variant: 'error' });
        })
        .finally(() => setLoad(false));
    }
  };

  useEffect(() => {
    setDisabledButton(watchFields.some((item) => item === undefined || item === ''));
  }, [watchFields]);

  return {
    disabledButton,
    paddingBottom,
    regexEmail,
    regexEnglishCharOnly,
    errors,
    alignment,
    load,
    navigate,
    register,
    handleSubmit,
    handleChange,
    handleRegister,
  };
}

export default useRegistration;
