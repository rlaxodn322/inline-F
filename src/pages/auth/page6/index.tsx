import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import Menual6 from '../../../components/apis/kakao/map';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Head>
        <title>타이거하우스</title>
        <meta name="description" content="타이거하우스" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>타이거 하우스 소개합니다.</h1>
      </div>

      <Page>
        <Menual6 />
      </Page>
      <Page>
        <div style={{ width: '1370px' }}>
          <h1>주소: 논산학생롤러경기장 충남 논산시 은진면 매죽헌로 331</h1>
          <h1>주소: 타이거하우스 충남 논산시 시민로184번길 39-8</h1>
          <h1>상담번호: 010-8009-2109</h1>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
