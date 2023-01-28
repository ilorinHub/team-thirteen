import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import {
  StyledMainSection,
  StyledNavItem,
  StyledSideBar,
  StyledWrapper,
} from './OnBoardingLayout.styled';
import SetupProfile from '../../components/onBoardComponents/profile/SetupProfile';

export default function OnBoading({ onboardingData, setOnboardingData, handleContinue }) {
  const { displayName } = onboardingData;

  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebaseReducer.auth);

  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (isLoaded(auth) && !isEmpty(auth)) {
      setOnboardingData({
        ...onboardingData,
        email: auth.email,
        displayName: auth.displayName,
        uid: auth.uid,
      });
      setSignedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: 'google',
        type: 'popup',
      })
      .then((data) => {
        setOnboardingData({
          ...onboardingData,
          email: data.profile?.email,
          displayName: data.profile?.displayName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledWrapper>
      <section>
        <StyledSideBar>
          <svg
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
            }}
            width='412'
            height='261'
            viewBox='0 0 412 261'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.0526316'
              d='M-63.372 71.4378C-58.0915 85.5474 -36.0332 113.053 9.95582 110.196C67.4421 106.626 102.256 62.5328 156.241 50.2541C196.086 41.1916 296.466 39.5377 339.971 86.85'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.105263'
              d='M-64.8035 44.697C-61.0267 59.2813 -41.9644 88.9415 4.07129 90.9079C61.6159 93.3659 100.848 53.1536 155.821 46.5852C196.395 41.7373 296.398 50.5851 334.719 102.186'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.157895'
              d='M-64.0445 18.2469C-61.813 33.1461 -45.9553 64.6364 -0.377415 71.404C56.595 79.8635 99.8152 43.9725 155.174 43.1863C196.032 42.606 294.563 61.8586 327.28 117.182'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.210526'
              d='M-61.1372 -7.68606C-60.4752 7.36476 -47.9961 40.3401 -3.37528 51.8349C52.4008 66.2033 99.1358 35.0266 154.273 40.0312C194.969 43.725 290.947 73.1713 317.702 131.612'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.263158'
              d='M-56.1477 -32.8797C-57.0626 -17.8421 -48.0987 16.257 -4.9238 32.3529C49.0448 52.4728 98.7827 26.352 153.095 37.0927C193.181 45.0201 285.556 84.3376 306.056 145.254'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.315789'
              d='M-49.1644 -57.1203C-51.6461 -42.2608 -46.2956 -7.41146 -5.03977 13.1093C46.5301 38.7603 98.7259 17.9816 151.618 34.3406C190.656 46.4147 278.415 95.1726 292.435 157.899'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.368421'
              d='M-40.298 -80.2052C-44.3194 -65.6865 -42.641 -30.4688 -3.75613 -5.74803C44.8499 25.1529 98.9318 9.94401 149.824 31.7421C187.386 47.8307 269.568 105.495 276.954 169.343'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.421053'
              d='M-29.6796 -101.943C-35.1966 -87.9245 -37.2086 -52.7243 -1.12078 -24.0744C43.989 11.738 99.3643 2.26553 147.699 29.2639C183.374 49.1907 259.078 115.129 259.75 179.399'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.473684'
              d='M-17.4595 -122.159C-24.4117 -108.794 -30.0921 -73.9967 2.80327 -41.7316C43.9225 -1.40011 99.9846 -5.03242 145.233 26.8704C178.629 50.4171 247.026 123.908 240.976 187.896'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.526316'
              d='M-3.80574 -140.694C-12.1169 -128.128 -21.4035 -94.1155 7.9391 -58.5886C44.6173 -14.18 100.752 -11.9323 142.417 24.5255C173.17 51.4341 233.51 131.671 220.805 194.677'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.578947'
              d='M11.0984 -157.407C1.51931 -145.779 -11.2717 -112.923 14.1965 -74.5236C46.0318 -26.5243 101.624 -18.4213 139.25 22.192C167.021 52.1676 218.644 138.273 199.422 199.605'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.631579'
              d='M27.0551 -172.176C16.3131 -161.613 0.157772 -130.275 21.4727 -89.4234C48.1163 -38.3594 102.557 -24.4898 135.732 19.8341C160.217 52.5483 202.557 143.578 177.03 202.565'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.684211'
              d='M43.8558 -184.904C32.0686 -175.522 12.726 -146.043 29.654 -103.188C50.814 -49.6185 103.507 -30.1343 131.867 17.4144C152.799 52.509 185.391 147.465 153.838 203.461'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.736842'
              d='M61.2826 -195.513C48.5792 -187.414 26.2613 -160.119 38.6169 -115.729C54.0615 -60.2411 104.429 -35.3557 127.663 14.8969C144.812 51.9872 167.3 149.83 130.067 202.221'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.789474'
              d='M79.1103 -203.948C65.6299 -197.221 40.5811 -172.409 48.2291 -126.97C57.789 -70.1723 105.279 -40.1584 123.134 12.2477C136.312 50.9273 148.449 150.585 105.943 198.797'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.842105'
              d='M97.1096 -210.18C83 -204.9 55.4949 -182.842 58.3513 -136.853C61.9218 -79.3664 106.015 -44.5529 118.293 9.43243C127.356 49.2776 129.01 149.658 81.6974 193.163'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.894737'
              d='M115.049 -214.204C100.465 -210.427 70.8049 -191.365 68.8385 -145.329C66.3806 -87.7848 106.593 -48.553 113.161 6.42001C118.009 46.9942 109.161 146.997 57.5608 185.318'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              opacity='0.947368'
              d='M132.699 -216.037C117.8 -213.806 86.3096 -197.948 79.542 -152.37C71.0824 -95.3977 106.974 -52.1776 107.76 3.18088C108.34 44.0396 89.0874 142.57 33.7639 175.287'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
            <path
              d='M149.831 -215.722C134.78 -215.06 101.805 -202.581 90.3103 -157.96C75.9418 -102.184 107.119 -55.4491 102.114 -0.311782C98.4201 40.3837 68.9738 136.362 10.5335 163.117'
              stroke='#D0D5DD'
              strokeWidth='0.5'
            />
          </svg>
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
            <StyledNavItem active>
              <h3>{displayName ? displayName : 'Sign in'}</h3>
              <p>
                {displayName
                  ? `Hi ${displayName?.split(' ')[0]}, welcome to ProjeX`
                  : 'log back in to continue'}
              </p>
            </StyledNavItem>
          </ul>
        </StyledSideBar>
        <StyledMainSection>
          <SetupProfile
            signInWithGoogle={signInWithGoogle}
            signedIn={signedIn}
            displayName={displayName}
            handleContinue={handleContinue}
            fromLogin
          />
        </StyledMainSection>
      </section>
      <svg
        style={{
          position: 'fixed',
          bottom: '0',
          left: '8rem',
          zIndex: '1',
        }}
        width='530'
        height='317'
        viewBox='0 0 530 317'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.0526316'
          d='M54.628 331.438C59.9085 345.547 81.9668 373.053 127.956 370.196C185.442 366.626 220.256 322.533 274.241 310.254C314.086 301.192 414.466 299.538 457.971 346.85'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.105263'
          d='M53.1966 304.697C56.9733 319.281 76.0357 348.942 122.071 350.908C179.616 353.366 218.848 313.154 273.821 306.585C314.395 301.737 414.398 310.585 452.719 362.186'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.157895'
          d='M53.9555 278.247C56.1871 293.146 72.0447 324.636 117.623 331.404C174.595 339.864 217.815 303.972 273.174 303.186C314.032 302.606 412.563 321.859 445.28 377.182'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.210526'
          d='M56.8628 252.314C57.5247 267.365 70.0039 300.34 114.625 311.835C170.401 326.203 217.136 295.027 272.273 300.031C312.969 303.725 408.947 333.171 435.702 391.612'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.263158'
          d='M61.8524 227.12C60.9375 242.158 69.9014 276.257 113.076 292.353C167.045 312.473 216.783 286.352 271.095 297.093C311.181 305.02 403.556 344.338 424.056 405.254'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.315789'
          d='M68.8356 202.88C66.3539 217.739 71.7043 252.589 112.96 273.109C164.53 298.76 216.726 277.982 269.618 294.341C308.656 306.415 396.415 355.173 410.435 417.899'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.368421'
          d='M77.702 179.795C73.6806 194.314 75.359 229.531 114.244 254.252C162.85 285.153 216.932 269.944 267.824 291.742C305.386 307.831 387.568 365.495 394.954 429.343'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.421053'
          d='M88.3204 158.057C82.8034 172.076 80.7914 207.276 116.879 235.926C161.989 271.738 217.364 262.266 265.699 289.264C301.374 309.191 377.078 375.129 377.75 439.399'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.473684'
          d='M100.54 137.841C93.5883 151.206 87.9078 186.003 120.803 218.268C161.922 258.6 217.985 254.968 263.233 286.87C296.629 310.417 365.026 383.908 358.976 447.896'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.526316'
          d='M114.194 119.306C105.883 131.872 96.5965 165.884 125.939 201.411C162.617 245.82 218.752 248.068 260.417 284.525C291.17 311.434 351.51 391.671 338.805 454.677'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.578947'
          d='M129.098 102.593C119.519 114.221 106.728 147.077 132.197 185.476C164.032 233.476 219.624 241.579 257.25 282.192C285.021 312.168 336.644 398.273 317.422 459.605'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.631579'
          d='M145.055 87.8238C134.313 98.3867 118.158 129.725 139.473 170.577C166.116 221.641 220.557 235.51 253.732 279.834C278.217 312.548 320.557 403.578 295.03 462.565'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.684211'
          d='M161.856 75.0963C150.069 84.4785 130.726 113.957 147.654 156.812C168.814 210.381 221.507 229.866 249.867 277.414C270.799 312.509 303.391 407.465 271.838 463.461'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.736842'
          d='M179.283 64.4874C166.579 72.5861 144.261 99.881 156.617 144.271C172.062 199.759 222.429 224.644 245.663 274.897C262.812 311.987 285.3 409.83 248.067 462.221'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.789474'
          d='M197.11 56.0522C183.63 62.7786 158.581 87.5911 166.229 133.03C175.789 189.828 223.279 219.842 241.134 272.248C254.311 310.927 266.449 410.585 223.943 458.797'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.842105'
          d='M215.11 49.8195C201 55.1001 173.495 77.1584 176.351 123.147C179.922 180.634 224.015 215.447 236.293 269.432C245.356 309.278 247.01 409.658 199.697 453.163'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.894737'
          d='M233.049 45.7959C218.465 49.5726 188.805 68.635 186.839 114.671C184.381 172.215 224.593 211.447 231.161 266.42C236.009 306.994 227.161 406.997 175.561 445.318'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          opacity='0.947368'
          d='M250.699 43.9627C235.8 46.1943 204.31 62.0519 197.542 107.63C189.082 164.602 224.974 207.822 225.76 263.181C226.34 304.04 207.087 402.57 151.764 435.287'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
        <path
          d='M267.831 44.2778C252.78 44.9398 219.805 57.4189 208.31 102.04C193.942 157.816 225.119 204.551 220.114 259.688C216.42 300.384 186.974 396.362 128.533 423.117'
          stroke='#D0D5DD'
          strokeWidth='0.5'
        />
      </svg>
    </StyledWrapper>
  );
}

OnBoading.propTypes = {
  onboardingData: PropTypes.object.isRequired,
  setOnboardingData: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
};
