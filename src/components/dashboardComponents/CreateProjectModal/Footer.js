import Button from '@mui/material/Button';

import { AttachFileRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
const Footer = ({
  handleReset,
  handleSubmit,
  disableSubmit,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Button sx={{ color: '#475467' }}>
        <AttachFileRounded
          sx={{ marginRight: '10px', transform: 'rotate(70deg)' }}
        />
      </Button>

      <div>
        <Button
          color='neutral'
          variant='contained'
          disableElevation
          size='large'
          sx={{
            textTransform: 'none',
            color: '#475467',
            minWidth: '140px',
            marginRight: '10px',
          }}
          autoFocus
          onClick={handleReset}
        >
          Cancel
        </Button>
        <Button
          disableElevation
          size='large'
          variant='contained'
          sx={{
            textTransform: 'none',
            color: 'white',
            minWidth: '220px',
          }}
          autoFocus
          disabled={disableSubmit()}
          onClick={handleSubmit}
        >
          Create Project
        </Button>
      </div>
    </Box>
  );
};

export default Footer;
