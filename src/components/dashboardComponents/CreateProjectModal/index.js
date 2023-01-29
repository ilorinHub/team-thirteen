import { useState } from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DashboardRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import CreateProjectForm from './CreateProjectForm';
import Footer from './Footer';
import { Divider } from '@mui/material';
import CreateTaskForm from './CreateTaskForm.js';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CreateProjectModal() {
  const [open, setOpen] = useState(false);
  const firestore = useFirestore();
  const auth = useSelector((state) => state?.firebaseReducer?.auth);

  const [value, setValue] = useState([null, null]);
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    budget: '',
    startDate: '',
    endDate: '',
    status: '',
    team: '',
    tasks: [],
  });

  const [taskForms, setTaskForms] = useState(['task']);

  const handleReset = () => {
    handleClose();
    setProjectData({
      name: '',
      description: '',
      budget: '',
      startDate: '',
      endDate: '',
      status: '',
      team: '',
      tasks: [],
    });
  };

  const handleSubmit = async () => {
    // TODO: add project to firebase
    // create project object
    const newProject = {
      ...projectData,
      startDate: new Date(projectData.startDate),
      endDate: new Date(projectData.endDate),
      tasks: projectData.tasks.map((task) => ({
        ...task,
        startDate: new Date(task.startDate),
        endDate: new Date(task.endDate),
      })),
      creator: auth.email,
      createdAt: new Date(),
    };
    console.log('submit', newProject);
    try {
      await firestore.collection('projects').add(newProject);
      handleReset();
    } catch (error) {
      console.log(error);
    }
  };

  const disableSubmit = () => {
    if (Object.values(projectData).every((val) => val)) {
      console.log(projectData);
      return false;
    }
    return true;
  };

  // handle form changes
  const handleProjectChange = (e, index, task) => {
    if (e === 'task') {
      if (projectData?.tasks?.length === 0) {
        setProjectData({
          ...projectData,
          tasks: [task],
        });
      } else if (projectData.tasks?.[index]) {
        console.log('second', index, {
          pdt: projectData.tasks,
          task,
        });
        const newTasks = [...projectData.tasks];
        newTasks[index] = task;
        setProjectData({
          ...projectData,
          tasks: newTasks,
        });
      } else {
        console.log('third', index, {
          pdt: projectData.tasks,
          task,
        });
        setProjectData({
          ...projectData,
          tasks: [...projectData.tasks, task],
        });
      }
    } else if (e?.target?.name === 'budget') {
      const numberedValue = Number(e.target.value.replace(/,/g, ''));
      if (isNaN(numberedValue)) return;
      setProjectData({
        ...projectData,
        [e.target.name]: numberedValue.toLocaleString('en-US'),
      });
    } else if (
      e?.target?.name === 'startDate' ||
      e?.target?.name === 'endDate'
    ) {
      setProjectData({
        ...projectData,
        startDate: e.target.value[0],
        endDate: e.target.value[1],
      });
    } else setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const divs = document.getElementsByTagName('div');
  const searchText = 'MUI X: Missing license key';
  let found;

  for (let i = 0; i < divs.length; i++) {
    if (divs[i].textContent == searchText) {
      found = divs[i];
      break;
    }
  }

  // remove found from DOM
  found?.parentNode.removeChild(found);

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{ textTransform: 'none' }}
        color='inherit'
        size='small'
      >
        <DashboardRounded sx={{ marginRight: '10px' }} /> Create Project
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth
        maxWidth='lg'
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: (theme) => theme.palette.background.default,
            color: (theme) => theme.palette.text.primary,
          },
        }}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          New Project
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <CreateProjectForm
            projectData={projectData}
            handleProjectChange={handleProjectChange}
            auth={auth}
            value={value}
            setValue={setValue}
          />
          {taskForms.map((form, i) => (
            <>
              <Divider fullWidth sx={{ my: 4 }} />
              <CreateTaskForm
                auth={auth}
                value={value}
                setValue={setValue}
                type={form}
                taskForms={taskForms}
                setTaskForms={setTaskForms}
                index={i}
                handleProjectChange={handleProjectChange}
              />
            </>
          ))}
        </DialogContent>
        <DialogActions>
          <Footer
            handleClose={handleClose}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            disableSubmit={disableSubmit}
          />
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

CreateProjectModal.propTypes = {};

export default CreateProjectModal;
