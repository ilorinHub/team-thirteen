import Button from '@mui/material/Button';
import Image from 'next/image';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DashboardRounded } from '@mui/icons-material';
import { Box } from '@mui/system';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SelectTeams from './SelectTeam';
import { useSelector } from 'react-redux';

export default function CreateProjectForm({
  projectData,
  handleProjectChange,
  auth,
  value,
  setValue,
}) {
  const { name, description, budget, status, team } = projectData;
  const {
    users,
    workspace,
    team: teams,
    projects,
  } = useSelector((state) => state.firestoreReducer.ordered);

  console.log(
    'users',
    users,
    'workspace',
    workspace,
    'teams',
    teams,
    'projects',
    projects
  );
  
  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
      <Box sx={{ marginRight: '30px', marginTop: '16px' }}>
        <Button
          sx={{
            color: '#475467',
            borderColor: '#D0D5DD',
            borderRadius: '8px',
            padding: '5px 5px',
            minWidth: 'unset',
          }}
          variant='outlined'
        >
          <DashboardRounded />
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          className='no-border'
          id='standard-basic'
          label='Project Name'
          size='small'
          name='name'
          value={name}
          onChange={handleProjectChange}
          variant='standard'
          sx={{
            width: '50%',
          }}
          // remove bottom border
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          sx={{
            width: '50%',
          }}
          className='no-border'
          id='standard-basic'
          label='Description'
          size='small'
          multiline
          name='description'
          value={description}
          onChange={handleProjectChange}
          rows={2}
          variant='standard'
          // remove bottom border
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          sx={{
            width: '20%',
          }}
          className='no-border'
          id='standard-basic'
          label='Budget'
          // type={'number'}
          name='budget'
          value={budget}
          onChange={handleProjectChange}
          size='small'
          variant='standard'
          // remove bottom border
          InputProps={{
            startAdornment: <InputAdornment position='start'>₦</InputAdornment>,
            disableUnderline: true,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            marginTop: '40px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={status}
              name='status'
              onChange={handleProjectChange}
              variant='standard'
              size='small'
            >
              <MenuItem value={'backlog'}>Backlog</MenuItem>
              <MenuItem value={'planned'}>Planned</MenuItem>
              <MenuItem value={'paused'}>Paused</MenuItem>
              <MenuItem value={'completed'}>Completed</MenuItem>
              <MenuItem value={'in_progress'}>In Progress</MenuItem>
              <MenuItem value={'unstarted'}>Unstarted</MenuItem>
            </Select>
            <FormHelperText>Project Status</FormHelperText>
          </FormControl>
          <Box sx={{ marginRight: '20px' }}>
            <Button
              variant='text'
              // disabled
              size='small'
              sx={{
                minWidth: 'unset',
                background: '#F2F4F7',
                textTransform: 'none',
                color: '#475467',
                borderRadius: '8px',
              }}
            >
              <Image
                style={{ borderRadius: '50%' }}
                src={auth?.photoURL}
                width={20}
                height={20}
                alt='user avatar'
              />
              <Box sx={{ marginRight: '10px' }}></Box>
              {auth?.displayName}
            </Button>
          </Box>
          <SelectTeams selectedTeam={team} handleSelect={handleProjectChange} />
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Start Date', end: 'End Date' }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                handleProjectChange(
                  {
                    target: {
                      name: 'startDate',
                      value: newValue,
                    },
                  }
                );
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField variant='standard' size='small' {...startProps} />
                  <Box sx={{ mx: 1 }}> </Box>
                  <TextField variant='standard' size='small' {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
}
