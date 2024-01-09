import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '300px',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // 수직 정렬을 위해 추가
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  width: '1370px',
  objectFit: 'cover',
};

const App: React.FC = () => (
  <Carousel autoplay autoplaySpeed={2000}>
    <div>
      <h3 style={contentStyle}>
        <img src="./images/picture1.png" style={imageStyle} alt="carousel-image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="./images/picture2.png" style={imageStyle} alt="carousel-image" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="./images/picture3.png" style={imageStyle} alt="carousel-image" />
      </h3>
    </div>
  </Carousel>
);

export default App;
