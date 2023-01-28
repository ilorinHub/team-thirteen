import { useEffect } from 'react';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Navbar } from '../src/components/dashboardComponents/navbar/Navbar';

const Dashboard = () => {
  const auth = useSelector((state) => state?.firebaseReducer?.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded(auth) && isEmpty(auth)) {
      router.replace('/login');
    }
  }, [auth, router]);

  if (!isLoaded(auth)) {
    return null;
  }
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
