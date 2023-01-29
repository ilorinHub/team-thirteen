/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import {
  DeleteRounded,
  ListAltRounded,
  StarsRounded,
} from '@mui/icons-material';
import { Box } from '@mui/system';
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SelectMembers from './SelectMembers';
import SelectPriority from './SelectPriority';
import SelectComplexity from './SelectComplexity';
import AddTaskMilestone from './AddTaskMilestone';

export default function CreateTaskForm({
  type,
  taskForms,
  setTaskForms,
  index,
  handleProjectChange,
}) {
  const [value, setValue] = useState([null, null]);
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    priority: '',
    startDate: '',
    endDate: '',
    status: '',
    assignedTo: [],
    complexity: '',
    type,
  });

  const submitForm = (e) => {
    e.preventDefault();

    const newTask = {
      name: taskData.name,
      description: taskData.description,
      priority: taskData.priority,
      startDate: dayjs(value[0]).format('YYYY-MM-DD'),
      endDate: dayjs(value[1]).format('YYYY-MM-DD'),
      status: taskData.status,
      assignedTo: taskData.assignedTo,
      complexity: taskData.complexity,
      type: type,
    };

    console.log(newTask, [...taskForms[index].tasks, newTask]);
    // handleProjectChange(
    //   'task',
    //   [...taskForms[index].tasks, newTask],
    // )
  };

  const handleTaskChange = (e) => {
    if (e.target.name === 'assignedTo') {
      let personName = [];
      const {
        target: { value },
      } = e;
      personName = typeof value === 'string' ? value.split(',') : value;
      setTaskData({ ...taskData, assignedTo: personName });
    }
    if (e?.target?.name === 'startDate' || e?.target?.name === 'endDate') {
      setTaskData({
        ...taskData,
        startDate: e.target.value[0],
        endDate: e.target.value[1],
      });
    } else {
      setTaskData({ ...taskData, [e.target.name]: e.target.value });
    }
    if (Object.values(taskData).every((val) => val)) {
      handleProjectChange('task', index, taskData);
    }
  };

  useEffect(() => {
    if (Object.values(taskData).every((val) => val)) {
      handleProjectChange('task', index, taskData);
    }
  }, [taskData, index]);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        position: 'relative',
      }}
    >
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
          {type === 'task' ? <ListAltRounded /> : <StarsRounded />}
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <TextField
          sx={{
            width: '50%',
          }}
          className='no-border'
          id='standard-basic'
          label={type === 'task' ? 'New Task' : 'New Milestone'}
          size='small'
          name='name'
          onChange={handleTaskChange}
          value={taskData.name}
          variant='standard'
          // remove bottom border
          InputProps={{
            disableUnderline: true,
          }}
        />
        <TextField
          sx={{
            width: '50%',
          }}
          name='description'
          onChange={handleTaskChange}
          value={taskData.description}
          className='no-border'
          id='standard-basic'
          label='Description'
          size='small'
          multiline
          rows={2}
          variant='standard'
          // remove bottom border
          InputProps={{
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
          <FormControl sx={{ m: 1, minWidth: 60 }} size='small'>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              value={taskData.status}
              name='status'
              variant='standard'
              size='small'
              onChange={handleTaskChange}
            >
              <MenuItem value={'backlog'}>Backlog</MenuItem>
              <MenuItem value={'planned'}>Planned</MenuItem>
              <MenuItem value={'paused'}>Paused</MenuItem>
              <MenuItem value={'completed'}>Completed</MenuItem>
              <MenuItem value={'in_progress'}>In Progress</MenuItem>
              <MenuItem value={'unstarted'}>Unstarted</MenuItem>
            </Select>
            <FormHelperText>
              {type === 'task' ? 'Task' : 'Milestone'} Status
            </FormHelperText>
          </FormControl>
          {type === 'task' && (
            <>
              <SelectPriority
                selectedPriority={taskData.priority}
                handleChange={handleTaskChange}
              />
              <SelectComplexity
                selectedComplexity={taskData.complexity}
                handleChange={handleTaskChange}
              />
              <SelectMembers
                selectedTeam={taskData.assignedTo}
                handleSelect={handleTaskChange}
              />
            </>
          )}
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Start Date', end: 'End Date' }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                handleTaskChange({
                  target: {
                    name: 'startDate',
                    value: newValue,
                  },
                });
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
      {index === taskForms.length - 1 ? (
        <Box
          sx={{
            marginRight: '30px',
            marginTop: '16px',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <AddTaskMilestone
            taskForms={taskForms}
            setTaskForms={setTaskForms}
            submitForm={submitForm}
          />
        </Box>
      ) : (
        <Box
          sx={{
            marginRight: '30px',
            marginTop: '16px',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          <Button
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            color='error'
            aria-expanded={open ? 'true' : undefined}
            onClick={() => {
              const taskFormsSaved = [...taskForms];
              taskFormsSaved.splice(index, 1);
              setTaskForms(taskFormsSaved);
            }}
            sx={{
              color: '#475467',
              borderColor: '#D0D5DD',
              borderRadius: '8px',
              padding: '5px 5px',
              minWidth: 'unset',
            }}
            variant='outlined'
          >
            <DeleteRounded />
          </Button>
        </Box>
      )}
    </Box>
  );
}
