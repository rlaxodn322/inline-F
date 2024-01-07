import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Menual from '../../../components/Manual/inlinemanual';
import { Button } from 'antd';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>인라인페이지</title>
        <meta name="description" content="인라인페이지" />
      </Head>
      <Page>
        <div style={{ display: 'flex', width: '1370px' }}>
          <Menual />
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
