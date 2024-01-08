import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1d7c8ad49ee868885a1d1bab7e46d818&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(37.166062304539, 127.10342236587),
          level: 6,
        };

        const newMap = new window.kakao.maps.Map(container, options);
        setMap(newMap);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
    <div style={{ margin: '0 auto' }}>
      <div id="map" style={{ width: '1370px', height: '350px', margin: '10px 0 10px 0' }}></div>
      {/* Render other components */}
    </div>
  );
}
