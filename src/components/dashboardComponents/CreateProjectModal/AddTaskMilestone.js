import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Add, HdrPlusOutlined } from '@mui/icons-material';

export default function AddTaskMilestone({ taskForms, setTaskForms }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (type) => {
    setTaskForms([...taskForms, type]);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#475467',
          borderColor: '#D0D5DD',
          borderRadius: '8px',
          padding: '5px 5px',
          minWidth: 'unset',
        }}
        variant='outlined'
      >
        <Add />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose('task');
          }}
        >
          Add another task
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose('milestone');
          }}
        >
          Add milestone
        </MenuItem>
      </Menu>
    </div>
  );
}
