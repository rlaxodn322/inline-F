import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Menual3 from '../../../components/Manual/baby';
import { Button } from 'antd';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>유아체육</title>
        <meta name="description" content="유아체육" />
      </Head>
      <Page>
        <div style={{ display: 'flex', width: '1370px' }}>
          <Menual3 />
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
