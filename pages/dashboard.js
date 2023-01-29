import { useEffect } from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Navbar } from "../src/components/dashboardComponents/navbar/Navbar";
import { Home } from "../src/components/dashboardComponents/home/Home";
const Dashboard = () => {
  const auth = useSelector((state) => state?.firebaseReducer?.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoaded(auth) && isEmpty(auth)) {
      router.replace("/onboarding");
    }
  }, [auth, router]);

  if (!isLoaded(auth)) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar mainContent={<Home />} />
    </div>
  );
};

export default Dashboard;
