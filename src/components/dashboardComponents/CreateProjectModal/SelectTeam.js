import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
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

const teams = [
  'Engineering',
  'Marketing',
  'Sales',
  'Customer Support',
  'Finance',
  'Human Resources',
  'Legal',
  'Product',
  'Design',
  'Data Science',
];

export default function SelectTeams({ selectedTeam, handleSelect }) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }} size='small'>
        <Select
          id='demo--team'
          value={selectedTeam}
          onChange={handleSelect}
          MenuProps={MenuProps}
          variant='standard'
          name='team'
          size='small'
        >
          {teams.map((team) => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Assign to Team</FormHelperText>
      </FormControl>
    </div>
  );
}
