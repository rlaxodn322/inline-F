import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';

import App from '../components/antd/card';
import MapComponent from '../components/apis/kakao/map';
import Main from '../components/Main/index';
import Carousel from '../components/antd/carousel';
const Home = () => {
  return (
    <div>
      <Head>
        <title>TIGER HOUSE</title>
        <meta name="description" content="text." />
      </Head>
      <Carousel />
      <Page>
        {' '}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ border: '1px solid black', width: '685px', height: '50vh' }}></div>
          <div style={{ border: '1px solid black', width: '685px', height: '50vh' }}></div>
        </div>
      </Page>
    </div>
  );
};

Home.layout = MainLayout;

export default Home;