import React, { useContext } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from '@mui/material';
import locationData from '../../utils/locationData';
import { Context } from '../../context';

export default function SelectAutoWidth() {
  const { countryId, setCountryId } = useContext(Context);

  const handleChange = (event) => {
    setCountryId(event.target.value);
  };

  return (
    <div data-testid="contry-selector">
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel sx={{ color: '#dbe6ed', fontSize: 'calc(0.5em + 0.7vw)' }} id="demo-simple-select-autowidth-label">Country</InputLabel>
        <Select
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            color: '#dbe6ed',
            fontSize: 'calc(0.8em + 1.5vw)',
            padding: 0,
          }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={countryId}
          onChange={handleChange}
          autoWidth
          label="Country"
        >
          { locationData.map(({ id, location }) => <MenuItem key={id} value={id}>{location}</MenuItem>)}
        </Select>
        <Box sx={{ m: 1 }} />
      </FormControl>
    </div>
  );
}
