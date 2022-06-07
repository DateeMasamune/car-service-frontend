import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import useRegistration from './useRegistration';
import Loading from '../Loading/Loading';

function Registration() {
  const {
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
  } = useRegistration();

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Dialog open>
        <DialogTitle>
          Регистрация аккаунта
        </DialogTitle>
        <DialogContent>
          <Box sx={paddingBottom}>
            <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('email', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Поле должно быть заполнено',
                },
                pattern: {
                  value: regexEmail,
                  message: 'error message',
                },
              })}
              fullWidth
              id="standard-basic"
              label="Почта"
              variant="standard"
              error={!!errors.email}
            />
          </Box>
          <Box sx={paddingBottom}>
            <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('firstName', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Поле должно быть заполнено',
                },
              })}
              fullWidth
              id="standard-basic"
              label="Имя"
              variant="standard"
              error={!!errors.firstName}
            />
          </Box>
          <Box sx={paddingBottom}>
            <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('lastName', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Поле должно быть заполнено',
                },
              })}
              fullWidth
              id="standard-basic"
              label="Фамилия"
              variant="standard"
              error={!!errors.lastName}
            />
          </Box>
          <Box sx={paddingBottom}>
            <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('password', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Поле должно быть заполнено',
                },
                pattern: {
                  value: regexEnglishCharOnly,
                  message: 'Пароль должен состоять из английских символов',
                },
              })}
              fullWidth
              id="standard-basic"
              label="Пароль"
              variant="standard"
              error={!!errors.password}
            />
          </Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="User">Пользователь</ToggleButton>
            <ToggleButton value="Operator">Оператор</ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate('/login')}
          >
            Войти
          </Button>
          <Button
            type="submit"
            onClick={handleRegister}
            disabled={disabledButton}
          >
            Готово
          </Button>
        </DialogActions>
      </Dialog>
      {load && <Loading load={load} />}
    </FormControl>
  );
}

export default Registration;
