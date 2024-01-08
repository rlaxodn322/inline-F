import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Menual2 from '../../../components/Manual/ski';
import { Button } from 'antd';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>스키페이지</title>
        <meta name="description" content="스키페이지" />
      </Head>
      <Page>
        <div style={{ display: 'flex', width: '1370px' }}>
          <Menual2 />
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
