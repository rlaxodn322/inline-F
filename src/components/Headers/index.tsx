import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LogoWrapper, ButtonWrapper } from './style';
import { Layout } from 'antd';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Weather from '../apis/weather';
import LoginButton from '../antd/loginbutton';
import Menu from '../Menubar/menu';
const MainLogo = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'success',
      title: '로그아웃 성공',
    }).then(() => {
      router.push('/auth/login').then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <Layout>
      <LogoWrapper>
        <Link href="../">
          <a>
            <img src={'/images/Tiger.jpeg'} />
          </a>
        </Link>
        <h1 style={{ marginRight: '450px', display: 'flex', alignItems: 'center' }}>TigerHouse</h1>
        <Weather></Weather>
        <ButtonWrapper>
          <LoginButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </ButtonWrapper>
      </LogoWrapper>

      <Menu />
    </Layout>
  );
};

export default MainLogo;
