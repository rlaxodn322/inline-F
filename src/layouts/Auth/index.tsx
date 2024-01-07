import React from 'react';
import Head from 'next/head';
import { ContentsWrapper, Layout } from './style';

const AuthLayout = ({ children }: any) => {
  return (
    <>
      <Layout>
        <ContentsWrapper>{children}</ContentsWrapper>
      </Layout>
    </>
  );
};

export default AuthLayout;
