import React from 'react';
import { Layout } from './style';

const MainFooter = () => {
  return (
    <>
      <Layout>
        <footer>
          <nav>
            <img src="/images/Tiger.jpeg"></img>
            <a>Tiger House</a>
          </nav>
          <p>
            <span>저자 : 김태우</span>
            <span>이메일 : 321sksms@naver.com</span>
            <span>Copyright 2023. 김태우. ALL Rights Reserved.</span>
          </p>
        </footer>
      </Layout>
    </>
  );
};

export default MainFooter;
