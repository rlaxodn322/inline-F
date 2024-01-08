import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Menual6 from '../../../components/apis/kakao/map';
import { Button } from 'antd';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>유아체육</title>
        <meta name="description" content="유아체육" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>타이거 하우스 소개합니다.</h1>
      </div>

      <Page>
        <div style={{ display: 'flex', width: '1370px', justifyContent: 'center' }}>
          <Menual6 />
        </div>
      </Page>
      <div style={{}}>
        <h1>주소:</h1>
        <h1>상담번호:</h1>
        <h1>팩스:</h1>
      </div>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
