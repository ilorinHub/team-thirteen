import { useEffect } from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const auth = useSelector((state) => state?.firebaseReducer?.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded(auth) && isEmpty(auth)) {
      router.replace('/onboarding');
    }
  }, [auth, router]);

  if (!isLoaded(auth)) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 style={{ color: 'black' }}>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
