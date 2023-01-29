import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

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

const complexitiesWithPoints = {
  1: '1 - Simple',
  2: '2 - Medium',
  3: '3 - Complex',
  4: '4 - Very Complex',
  5: '5 - Extremely Complex',
};

export default function SelectComplexity({ selectedComplexity, handleChange }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 180 }} size='small'>
        <Select
          value={selectedComplexity}
          onChange={handleChange}
          MenuProps={MenuProps}
          name='complexity'
          variant='standard'
          size='small'
        >
          {Object.keys(complexitiesWithPoints).map((complexity) => (
            <MenuItem key={complexity} value={complexity}>
              {complexitiesWithPoints[complexity]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Task complexity (points)</FormHelperText>
      </FormControl>
    </div>
  );
}
