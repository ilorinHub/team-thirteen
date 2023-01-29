import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, InputBase } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const priorities = {
  1: 'Low',
  2: 'Medium',
  3: 'High',
  4: 'Urgent',
};

export default function SelectPriority({ selectedPriority, handleChange }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 130 }} size='small'>
        <Select
          id='demo--priority'
          value={selectedPriority}
          onChange={handleChange}
          name='priority'
          MenuProps={MenuProps}
          variant='standard'
          size='small'
        >
          {Object.keys(priorities).map((key) => {
            return (
              <MenuItem key={key} value={key}>
                {priorities[key]}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Set Task Priority</FormHelperText>
      </FormControl>
    </div>
  );
}
