import { useState } from 'react';
import OnBoading from '../src/pageLayouts/onboarding/OnBoading';
import { useFirestore } from 'react-redux-firebase';

export default function Onboarding() {
  const firestore = useFirestore();
  const [step, setStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    workspaceName: '',
    displayName: '',
    email: '',
    role: 'admin',
    designation: '',
    teamName: '',
    teamMembers: [],
  });

  const handleChanges = (e) => {
    if (e.target.name.includes('teamMembers')) {
      const clonedTeamMembers = [...onboardingData.teamMembers];
      clonedTeamMembers[e.target.name.split('-')[1]] = e.target.value;
      setOnboardingData({
        ...onboardingData,
        teamMembers: clonedTeamMembers,
      });
    } else
      setOnboardingData({ ...onboardingData, [e.target.name]: e.target.value });
  };

  const handleComplete = async () => {
    console.log('onboardingData', onboardingData);
    // Create workspace
    const newWorkspace = {
      name: onboardingData.workspaceName,
      createdAt: new Date(),
      createdBy: onboardingData.email,
      members: [onboardingData.email],
    };
    try {
      const fireWorkspace = await firestore
        .collection('workspace')
        .add(newWorkspace);
      console.log(fireWorkspace?.id);
      // Create team
      const newTeam = {
        name: onboardingData.teamName,
        createdAt: new Date(),
        createdBy: onboardingData.email,
        members: [onboardingData.email],
        workspaceId: fireWorkspace?.id,
      };
      const fireTeam = await firestore.collection('team').add(newTeam);
      console.log(fireTeam?.id);
      // Update workspace
      const updatedWorkspace = {
        ...newWorkspace,
        teams: [fireTeam?.id],
      };
      await firestore
        .collection('workspace')
        .doc(fireWorkspace?.id)
        .set(updatedWorkspace);
      // Update user
      const newUser = {
        displayName: onboardingData.displayName,
        email: onboardingData.email,
        role: onboardingData.role,
        designation: onboardingData.designation,
        workspaceId: fireWorkspace?.id,
        teamId: fireTeam?.id,
      };
      await firestore.collection('users').doc(onboardingData.uid).set(newUser);
      // save team members
      const teamMembers = onboardingData.teamMembers.map((member) => {
        return {
          email: member,
          workspaceId: fireWorkspace?.id,
          teamId: fireTeam?.id,
          teamName: onboardingData.teamName,
          workspaceName: onboardingData.workspaceName,
          displayName: onboardingData.displayName,
          workspaceOwner: onboardingData.email,
        };
      });
      teamMembers.forEach(async member => {
        await firestore.collection('invitee_emails').add(member)
      });
      ;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OnBoading
      step={step}
      setStep={setStep}
      onboardingData={onboardingData}
      handleChanges={handleChanges}
      setOnboardingData={setOnboardingData}
      handleComplete={handleComplete}
    />
  );
}
