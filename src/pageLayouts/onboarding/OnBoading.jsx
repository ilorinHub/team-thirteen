import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleButton from 'react-google-button';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import {
  StyledMainSection,
  StyledNavItem,
  StyledSideBar,
  StyledWrapper,
} from './OnBoardingLayout.styled';

export default function OnBoading({
  step,
  setStep,
  onboardingData,
  handleChanges,
  setOnboardingData,
  handleComplete,
}) {
  const { workspaceName, displayName, designation, teamName, teamMembers } =
    onboardingData;

  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebaseReducer.auth);

  const [teamMembersInput, setTeamMembersInput] = useState([0]);

  useEffect(() => {
    if (step === 1 && isLoaded(auth) && !isEmpty(auth)) {
      setOnboardingData({
        ...onboardingData,
        email: auth.email,
        displayName: auth.displayName,
        uid: auth.uid,
      });
      setStep(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, step]);

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup',
      })
      .then((data) => {
        console.log(data);
        setOnboardingData({
          ...onboardingData,
          email: data.profile?.email,
          displayName: data.profile?.displayName,
        });
        setStep(2);
      });
  };

  const handleContine = () => {
    setStep(step + 1);
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Give your new home a name.</h3>
            <input
              name='workspaceName'
              value={workspaceName}
              onChange={handleChanges}
            />
            <button onClick={handleContine}>Continue</button>
          </div>
        );
      case 1:
        return (
          <div>
            <GoogleButton
              onClick={(event) => {
                event.preventDefault();
                signInWithGoogle();
              }}
            ></GoogleButton>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Tailor your ProjeX experience</h3>
            <input
              name='teamName'
              value={teamName}
              placeholder='Team Name'
              onChange={handleChanges}
            />
            <input
              name='designation'
              value={designation}
              placeholder='Designation'
              onChange={handleChanges}
            />
            <button onClick={handleContine}>Continue</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Invite your team</h3>
            {teamMembersInput.map((member, index) => (
              <>
                <input
                  onChange={handleChanges}
                  value={teamMembers[index]}
                  name={`teamMembers-${index}`}
                  key={index}
                />
                {member > 0 && (
                  <button
                    onClick={() =>
                      setTeamMembersInput([
                        ...teamMembersInput.filter((e) => e !== member),
                      ])
                    }
                  >
                    x
                  </button>
                )}
              </>
            ))}
            <button
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
              Add another field
            </button>
            <div>
              <button onClick={handleComplete}>
                Complete Setup and Invite members
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <StyledWrapper>
      <section>
        <StyledSideBar>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '2rem',
              fontSize: '2rem',
            }}
          >
            <h1>ProjeX</h1>
          </div>
          <ul>
            <StyledNavItem active={step === 0} onClick={() => setStep(0)}>
              <h3>
                {workspaceName && step !== 0
                  ? workspaceName
                  : 'Create workspace'}
              </h3>
              <p>
                {workspaceName && step !== 0
                  ? 'Your team has a new home!'
                  : 'Give your new home a name.'}
              </p>
            </StyledNavItem>
            <StyledNavItem active={step === 1} onClick={() => setStep(1)}>
              <h3>
                {displayName && step !== 1
                  ? displayName
                  : 'Create your Profile'}
              </h3>
              <p>
                {displayName && step !== 1
                  ? `Hi ${displayName?.split(' ')[0]}, welcome to ProjeX`
                  : 'Fill out some quick details.'}
              </p>
            </StyledNavItem>
            <StyledNavItem active={step === 2} onClick={() => setStep(2)}>
              <h3>
                {teamName && step !== 2 ? teamName : 'Tell us about your team'}
              </h3>
              <p>
                {designation && step !== 2
                  ? `As ${designation} in ${teamName}, you will enjoy using ProjeX`
                  : 'Tailor your ProjeX experience'}
              </p>
            </StyledNavItem>
            <StyledNavItem active={step === 3} onClick={() => setStep(3)}>
              <h3>Invite your team</h3>
              <p>We recommend exploring ProjeX with your team.</p>
            </StyledNavItem>
          </ul>
        </StyledSideBar>
        <StyledMainSection>{renderStep(step)}</StyledMainSection>
      </section>
    </StyledWrapper>
  );
}

OnBoading.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func.isRequired,
  onboardingData: PropTypes.object.isRequired,
  setOnboardingData: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

OnBoading.defaultProps = {
  step: 0,
};
