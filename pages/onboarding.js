import { useState, useEffect } from 'react';
import OnBoading from '../src/pageLayouts/onboarding/OnBoading';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useRouter } from 'next/router';

const convertToArrayOfObjects = (obj) =>
  obj && Object?.entries(obj)?.map(([id, value]) => ({ id, ...value }));

export default function Onboarding() {
  useFirestoreConnect(['users', 'workspace', 'team']);
  const { users, workspace, team } = useSelector(
    (state) => state.firestoreReducer.data
  );
  const auth = useSelector((state) => state.firebaseReducer.auth);
  const router = useRouter();

  useEffect(() => {
    if (auth?.uid) {
      const user = convertToArrayOfObjects(users)?.filter(
        (u) => u.id === auth.uid
      )[0];
      const userWorkspace = convertToArrayOfObjects(workspace)?.filter(
        (w) => w.id === user?.workspaceId
      )[0];
      const userTeam = convertToArrayOfObjects(team)?.filter(
        (t) => t.id === user?.teamId
      )[0];
      setOnboardingData({
        ...onboardingData,
        displayName: auth?.displayName,
        email: auth?.email,
        role: user?.role,
        designation: user?.designation,
        uid: auth?.id,
        workspaceId: user?.workspaceId,
        teamId: user?.teamId,
        workspaceName: userWorkspace?.name,
        teamName: userTeam?.name,
        teamType: userTeam?.type,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.uid, workspace, team, users]);

  const firestore = useFirestore();
  const [step, setStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    workspaceName: '',
    displayName: '',
    email: '',
    role: 'admin',
    designation: '',
    teamName: '',
    teamType: '',
    teamMembers: [],
    workspaceId: '',
    teamId: '',
    uid: '',
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
      setOnboardingData({
        ...onboardingData,
        workspaceId: fireWorkspace?.id,
      });
      // Create team
      const newTeam = {
        name: onboardingData.teamName,
        type: onboardingData.teamType,
        createdAt: new Date(),
        createdBy: onboardingData.email,
        members: [onboardingData.email],
        workspaceId: fireWorkspace?.id,
      };
      const fireTeam = await firestore.collection('team').add(newTeam);
      console.log(fireTeam?.id);
      setOnboardingData({
        ...onboardingData,
        teamId: fireTeam?.id,
      });

      // Update workspace
      const updatedWorkspace = {
        ...newWorkspace,
        teams: [fireTeam?.id],
      };
      await firestore
        .collection('workspace')
        .doc(fireWorkspace?.id)
        .update(updatedWorkspace);

      // Update user
      const newUser = {
        displayName: onboardingData.displayName,
        email: onboardingData.email,
        role: onboardingData.role,
        designation: onboardingData.designation,
        workspaceId: fireWorkspace?.id,
        teamId: fireTeam?.id,
      };
      await firestore
        .collection('users')
        .doc(onboardingData.uid)
        .update(newUser);
      setStep(3);
    } catch (error) {
      console.log(error);
    }
  };

  const inviteTeamMembers = async () => {
    const {
      teamMembers,
      teamId,
      workspaceId,
      teamName,
      workspaceName,
      displayName,
      email,
      teamType,
    } = onboardingData;
    const newTeamMembers = teamMembers.filter((member) => member !== '');
    const newTeamMembersData = newTeamMembers.map((member) => ({
      email: member,
      role: 'member',
      workspaceId,
      teamId,
      teamName,
      teamType,
      workspaceName,
      invitedBy: displayName,
      workspaceOwner: email,
      createdAt: new Date(),
    }));
    try {
      const batch = firestore.batch();
      newTeamMembersData.forEach((member) => {
        const newMemberRef = firestore.collection('invitee_emails').doc();
        batch.set(newMemberRef, member);
      });
      await batch.commit();
      router.push('/dashboard');
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
      inviteTeamMembers={inviteTeamMembers}
    />
  );
}
