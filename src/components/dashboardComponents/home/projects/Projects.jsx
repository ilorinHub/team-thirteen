import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";
import { ProjectCard } from "../projectCard/ProjectCard";
import { useSelector } from 'react-redux';

export const Projects = () => {
  const [showing, setShowing] = useState('unfinished');
  const { users, projects } = useSelector(
    (state) => state.firestoreReducer.ordered
  );
  return (
    <Box sx={{ padding: '10px', margin: 0 }}>
      <Box
        sx={{
          background: 'white',
          display: 'block',
          padding: '20px',
        }}
      >
        <p style={{ fontWeight: 500, fontSize: 20, color: '#101828' }}>
          My Projects
        </p>
        <p style={{ marginTop: '12px' }}>
          <label style={{ fontSize: 16, fontWeight: 400, marginRight: '16px' }}>
            Showing:{' '}
          </label>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={showing}
            label='Showing'
            onChange={(e) => {
              setShowing(e.target.value);
            }}
            sx={{ height: 32, width: 160, fontSize: '14px' }}
          >
            <MenuItem value={'unfinished'}>Unfinished Only</MenuItem>
            <MenuItem value={'finished'}>Finished Only</MenuItem>
            <MenuItem value={'everything'}>Everything</MenuItem>
          </Select>
        </p>
        <p style={{ marginTop: '30px', fontWeight: 400, fontSize: '14px' }}>
          Ready for Development 2
        </p>
        {console.log(projects)}

        {projects &&
          projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
      </Box>
    </Box>
  );
};
