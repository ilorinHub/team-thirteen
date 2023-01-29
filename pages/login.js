import { useState, useEffect } from 'react';
import OnBoading from '../src/pageLayouts/login/OnBoading';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


export default function Login() {
  const auth = useSelector((state) => state.firebaseReducer.auth);
  const router = useRouter();

  useEffect(() => {
    if (auth?.uid) {
      router.push('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.uid, router]);

  const [onboardingData, setOnboardingData] = useState({
    displayName: '',
    email: '',
    uid: '',
  });

  return (
    <OnBoading
      onboardingData={onboardingData}
      setOnboardingData={setOnboardingData}
      handleContinue={() => router.push('/dashboard')}
    />
  );
}
