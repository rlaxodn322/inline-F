import MainHeader from '../components/Headers';
import MainNavbar from '../components/Navbars';
import MainFooter from '../components/Footers';
import { ContentsWrapper, Layout } from './style';
import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Layout>
        <MainHeader />

        <ContentsWrapper>{children}</ContentsWrapper>
        <MainFooter></MainFooter>
      </Layout>
    </>
  );
};

export default MainLayout;
