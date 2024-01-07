import React, { useState } from 'react';
import Link from 'next/link';

const Menual: React.FC = () => {
  return (
    <>
      <div>
        <h1 style={{ borderBottom: '1px solid black' }}>인라인 스피드소개</h1>
      </div>
      <div>
        <br />
        <br />
        <h1>
          삶을 바꾸는 작은 습관
          <br /> 작은 변화로 건강과 행복 두가지 다 챙기세요.
        </h1>
        <img src="http://www.leportsedu.com/img/sub_01_01.jpg" alt="" />
      </div>
    </>
  );
};

export default Menual;
