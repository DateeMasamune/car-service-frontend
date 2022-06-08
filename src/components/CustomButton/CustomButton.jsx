import React from 'react';
import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
function CustomButton({
  // eslint-disable-next-line react/prop-types
  name, onClick, disabled, style,
}) {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      onClick={onClick}
      style={style}
    >
      {name}
    </Button>
  );
}

export default CustomButton;
