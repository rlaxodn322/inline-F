import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
import Carousel from '../components/antd/carousel';
import Dashmiddle from '../components/dashboard/middle';
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
        <Dashmiddle />
      </Page>
    </div>
  );
};

Home.layout = MainLayout;

export default Home;
