import { useState } from 'react';
import {
  StyledWelcomeFormWrapper,
  StyledWelcomeWrapper,
} from './Invite.styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/icons-material/Link';

function Invite({
  handleChanges,
  inviteTeamMembers,
  teamMembers,
  onboardingData,
  setOnboardingData,
}) {
  const [teamMembersInput, setTeamMembersInput] = useState([0]);
  return (
    <StyledWelcomeWrapper>
      <div className='welcome_content'>
        <h2>Invite your team</h2>

        <StyledWelcomeFormWrapper>
          <p className='intro'>We recommend exploring ProX with your team</p>
          <form>
            <label>Invite team members by email</label>
          </form>
          {teamMembersInput.map((member, index) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '10px 0',
              }}
              key={index}
            >
              <OutlinedInput
                fullWidth
                size='small'
                onChange={handleChanges}
                value={teamMembers[index]}
                name={`teamMembers-${index}`}
                placeholder='user@example.com'
                type='email'
              />
              {member > 0 ? (
                <IconButton
                  style={{ marginLeft: '10px', flex: 1 }}
                  color='error'
                  onClick={() =>
                    setTeamMembersInput([
                      ...teamMembersInput.filter((e) => e !== member),
                    ])
                  }
                  aria-label='delete'
                >
                  <DeleteIcon />
                </IconButton>
              ) : (
                <IconButton
                  style={{ marginLeft: '10px', flex: 1 }}
                  disabled
                  onClick={() =>
                    setTeamMembersInput([
                      ...teamMembersInput.filter((e) => e !== member),
                    ])
                  }
                  aria-label='delete'
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
          <div className='footer'>
            <Button
              sx={{ color: '#344054', textTransform: 'none' }}
              variant='text'
              startIcon={<AddIcon />}
              onClick={() => {
                setTeamMembersInput([
                  ...teamMembersInput,
                  teamMembersInput.length,
                ]);
                setOnboardingData({
                  ...onboardingData,
                  teamMembers: [...teamMembers],
                });
              }}
              disabled={!teamMembers[teamMembersInput.length - 1]}
            >
              Add another
            </Button>
            <Button
              sx={{ color: '#344054', textTransform: 'none' }}
              variant='text'
              startIcon={<Link />}
              onClick={() => {
                // copy to clipboard
                navigator.clipboard.writeText(
                  `https://byte-me-ng.firebaseapp.com/invite?workspace=${onboardingData.workspaceId}&team=${onboardingData.teamId}&teamType=${encodeURIComponent(onboardingData.teamType)}`
                );
              }}
            >
              Get a shareable link
            </Button>
          </div>
          <Button
            fullWidth
            disableElevation
            variant='contained'
            sx={{ color: '#fff' }}
            onClick={inviteTeamMembers}
          >
            Invite Teamates
          </Button>
        </StyledWelcomeFormWrapper>
      </div>
    </StyledWelcomeWrapper>
  );
}

export default Invite;
