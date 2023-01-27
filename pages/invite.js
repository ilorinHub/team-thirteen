import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import OnBoading from '../src/pageLayouts/invite/OnBoading';
import { useFirestore } from 'react-redux-firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { db } from './_app';

const convertToArrayOfObjects = (obj) =>
  obj && Object?.entries(obj)?.map(([id, value]) => ({ id, ...value }));

export default function Onboarding() {
  // get query params from url
  const router = useRouter();
  const {
    workspace: newUsersWorkspaceId,
    team: newUsersTeamId,
    teamType: newUsersTeamType,
  } = router.query;
  useFirestoreConnect([
    {
      collection: 'workspace',
      doc: newUsersWorkspaceId,
    },
  ]);
  let workspaceRef, teamRef;
  if (db && doc && newUsersWorkspaceId && newUsersTeamId) {
    workspaceRef = doc(db && db, 'workspace', newUsersWorkspaceId);
    teamRef = doc(db && db, 'team', newUsersTeamId);
  }
  const { workspace, team } = useSelector(
    (state) => state.firestoreReducer.data
  );
  const auth = useSelector((state) => state.firebaseReducer.auth);

  useEffect(() => {
    if ((newUsersWorkspaceId, newUsersTeamId)) {
      setOnboardingData({
        ...onboardingData,
        displayName: auth?.displayName,
        role: 'member',
        uid: auth?.uid,
        workspaceId: newUsersWorkspaceId,
        teamId: newUsersWorkspaceId,
        teamType: newUsersTeamType,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.uid, workspace, team, newUsersWorkspaceId]);

  const firestore = useFirestore();
  const [step, setStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({
    displayName: '',
    designation: '',
    teamType: '',
  });

  const handleChanges = (e) => {
    setOnboardingData({ ...onboardingData, [e.target.name]: e.target.value });
  };

  const handleComplete = async () => {
    try {
      // update workspace
      await updateDoc(workspaceRef, {
        members: arrayUnion(auth.email),
      });

      // update team
      await updateDoc(teamRef, {
        members: arrayUnion(auth.email),
      });

      // Update user
      const updatedUser = {
        role: 'member',
        designation: onboardingData.designation,
        workspaceId: newUsersWorkspaceId,
        teamId: newUsersTeamId,
      };
      await firestore.collection('users').doc(auth.uid).update(updatedUser);
      // redirect to dashboard
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
    />
  );
}
