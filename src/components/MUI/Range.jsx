import React, { useContext } from 'react';
import { Slider, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Context } from '../../context';

const PrettoSlider = styled(Slider)({
  color: '#dbe6ed',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#229b91',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function CustomizedSlider() {
  const { desiredPrice, setDesiredPrice } = useContext(Context);

  const handleChange = (event) => {
    setDesiredPrice(event.target.value);
  };
  return (
    <Box sx={{ width: 250 }} data-testid="slider">
      <Typography sx={{ color: '#dbe6ed', fontSize: 'calc(0.5em + 0.7vw)' }}>Max Price $</Typography>
      <Box sx={{ m: 1 }} />
      <PrettoSlider
        d="range"
        onChange={handleChange}
        valueLabelDisplay="auto"
        defaultValue={700}
        value={desiredPrice}
        max={3000}
        min={300}
      />
    </Box>
  );
}
