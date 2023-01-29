import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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

const names = [
  'Mahmoud Mahmoud',
  'Yusuf Abdulkarim',
  'Yewande Palmer',
  'Lawrence Dev',
  'Yusuf Yusuf',
  'Ridwan Bakare',
  'Adeola Abdulrahman',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectMembers({ selectedTeam, handleSelect }) {

  const theme = useTheme();

  return (
    <FormControl sx={{ m: 1, width: 220 }} size='small'>
      <Select
        id='demo-multiple-name'
        multiple
        value={selectedTeam}
        onChange={handleSelect}
        inputProps={{
          name: 'assignedTo',
          id: 'demo-multiple-name',
        }}
        MenuProps={MenuProps}
        variant='standard'
        size='small'
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, selectedTeam, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Assign task to team member(s)</FormHelperText>
    </FormControl>
  );
}
