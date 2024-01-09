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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '685px', height: '100vh', padding: '20px' }}>
            {/* 첫 번째 시간표 */}
            <h2>시간표</h2>
            <img src="./images/time.png"></img>
          </div>

          <div style={{ width: '685px', height: '50vh', padding: '20px' }}>{/* 두 번째 시간표 */}</div>
        </div>
      </Page>
    </div>
  );
};

Home.layout = MainLayout;

export default Home;
