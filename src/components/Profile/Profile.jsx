import React from 'react';
import { Box, Typography } from '@mui/material';
import { AccountCircle, LockClockOutlined } from '@mui/icons-material';
import useProfile from './useProfile';

function Profile() {
  const {
    user,
    getRole,
  } = useProfile();
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: '30px' }}>
        Страница профиля
      </Typography>
      <AccountCircle sx={{ fontSize: '150px', color: 'gray' }} />
      <Box sx={{ display: 'flex', marginBottom: '10px' }}>
        <Typography variant="h4" sx={{ marginRight: '10px' }}>
          {user?.firstName}
        </Typography>
        <Typography variant="h4">
          {user?.lastName}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: 'green' }}>
        {`Уровень доступа: ${getRole(user?.role)}`}
        <LockClockOutlined sx={{ marginLeft: '10px' }} />
      </Typography>
    </Box>
  );
}

export default Profile;
