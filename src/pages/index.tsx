import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
import Carousel from '../components/antd/carousel';

const Home = () => {
  return (
    <div>
      <Head>
        <title>TIGER HOUSE</title>
        <meta name="description" content="text." />
      </Head>
      <div style={{ marginTop: '30px' }}>
        <Carousel />
      </div>

      <Page>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '685px', height: '100vh' }}>
            {/* 첫 번째 시간표 */}
            <h2>시간표</h2>
            <img src="./images/time.png"></img>
          </div>

          <div style={{ width: '685px', height: '50vh' }}>
            <h1>
              1회차 필수 참가! (1회차때 장비 착용, 안전 교육을 하오니 꼭 참가 하셔야 합니다) 회차는 선택 가능합니다.
            </h1>
            <h1>
              [특강료 회당 1만원 (21회=18만원)*신청방법* ​ 이름/나이/학교/회차수 ​ ex)홍길동/10세/호랑초/10회(10만원
              입금)
            </h1>
            <h1>
              ex)홍길동/12세/호랑초/21회(18만원 입금) 010-8009-2109 정홍래코치 인라인 수업 안내 ​
              장소:논산학생롤러경기장
            </h1>
            <h1>​ 준비물:인라인스케이트,보호대(장갑,손,팔꿈치,무릎,헬멧)마실물,눈빛</h1>
          </div>
        </div>
      </Page>
    </div>
  );
};

Home.layout = MainLayout;

export default Home;
