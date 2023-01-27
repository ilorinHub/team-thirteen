import { useState } from "react";
import { Box, Button, MenuItem, OutlinedInput, Select } from "@mui/material";
import {
  StyledIntroduceFormWrapper,
  StyledIntroduceWrapper,
} from "./Introduce.styled";

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

const projectTypesObject = {
  Construction: {
    roles: [
      'Project Manager',
      'Site Manager',
      'Architect',
      'Engineer',
      'Safety Officer',
      'Quantity Surveyor',
      'Foreman',
      'Project Coordinator',
      'Carpenter',
      'Electrician',
    ],
  },
  'IT Development': {
    roles: [
      'Project Manager',
      'Software Developer',
      'System Analyst',
      'QA Tester',
      'Technical Support',
      'Business Analyst',
      'Database Administrator',
      'DevOps Engineer',
      'Network Engineer',
      'Technical Writer',
    ],
  },
  Marketing: {
    roles: [
      'Project Manager',
      'Marketing Strategist',
      'Graphic Designer',
      'Content Creator',
      'Social Media Manager',
      'Marketing Coordinator',
      'Campaign Manager',
      'Brand Manager',
      'Public Relations Officer',
      'Analytics Specialist',
    ],
  },
  'Product Development': {
    roles: [
      'Project Manager',
      'Product Manager',
      'Designer',
      'Engineer',
      'Quality Assurance Tester',
      'Research and Development Engineer',
      'Prototyping Specialist',
      'Industrial Designer',
      'Supply Chain Coordinator',
      'Cost Estimator',
    ],
  },
  'Event Planning': {
    roles: [
      'Project Manager',
      'Event Planner',
      'Vendor Coordinator',
      'Event Designer',
      'Event Marketing Coordinator',
      'Event Logistics Manager',
      'Event Sales Manager',
      'Event Operations Manager',
      'Event Production Manager',
      'Event Technology Manager',
    ],
  },
  'Software Development': {
    roles: [
      'Project Manager',
      'Software Developer',
      'Quality Assurance Tester',
      'Technical Writer',
      'Technical Support',
      'Business Analyst',
      'Database Administrator',
      'DevOps Engineer',
      'Network Engineer',
      'Technical Writer',
    ],
  },
  'Research and Development': {
    roles: [
      'Project Manager',
      'Research Scientist',
      'Engineer',
      'Lab Technician',
      'Quality Control Analyst',
      'Data Analyst',
      'R&D Coordinator',
      'R&D Engineer',
      'R&D Technologist',
      'R&D Manager',
    ],
  },
  Operations: {
    roles: [
      'Project Manager',
      'Operations Manager',
      'Supply Chain Manager',
      'Logistics Coordinator',
      'Quality Control Analyst',
      'Production Manager',
      'Inventory Manager',
      'Maintenance Manager',
      'Procurement Manager',
      'Shipping and Receiving Coordinator',
    ],
  },
  Sales: {
    roles: [
      'Project Manager',
      'Sales Manager',
      'Account Manager',
      'Business Development Manager',
      'Regional Sales Manager',
      'Territory Manager',
      'Inside Sales Representative',
      'Outside Sales Representative',
      'Sales Coordinator',
      'Sales Analyst',
    ],
  },
  'Human Resources': {
    roles: [
      'Project Manager',
      'HR Manager',
      'Recruiter',
      'Talent Acquisition Specialist',
      'HR Coordinator',
      'Compensation and Benefits Analyst',
      'Employee Relations Specialist',
      'Training and Development Coordinator',
      'HR Analyst',
      'Employee Engagement Specialist',
    ],
  },
};

function Introduce({ designation, teamType, onChange, onSubmit }) {
  return (
    <StyledIntroduceWrapper>
      <div className='content'>
        <h2>Set up your first team</h2>

        <StyledIntroduceFormWrapper>
          <p className='intro'>
            This information will help us tailor your ProjeX experience.
          </p>

          <form>
            <label htmlFor='designation'>
              What best describes your role in the team?
            </label>
            <Select
              fullWidth
              displayEmpty
              renderValue={(selected) =>
                selected ? selected || teamType : 'e. g. Project Manager'
              }
              value={designation}
              name='designation'
              onChange={onChange}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value='Project Manager'>
                <em>Project Manager</em>
              </MenuItem>
              {projectTypesObject?.[teamType]?.roles?.map(
                (name, idx) => (
                  <MenuItem key={name + idx + teamType} value={name}>
                    {name}
                  </MenuItem>
                )
              )}
            </Select>

            <Box sx={{ margin: '24px auto', maxWidth: '300px' }}>
              <Button
                fullWidth
                disableElevation
                variant='contained'
                sx={{ color: '#fff' }}
                onClick={onSubmit}
                onSubmit={onSubmit}
              >
                Complete Sign Up
              </Button>
            </Box>
          </form>
        </StyledIntroduceFormWrapper>
      </div>
    </StyledIntroduceWrapper>
  );
}

export default Introduce;
