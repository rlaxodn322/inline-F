import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1d7c8ad49ee868885a1d1bab7e46d818&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(36.149977533082, 127.12538241968123),
          level: 8,
        };

        const newMap = new window.kakao.maps.Map(container, options);

        // 마커 클릭 시 이벤트 처리 함수
        const handleMarkerClick = (marker, content) => {
          if (infowindow) {
            // 이미 열려있는 InfoWindow가 있을 경우 닫기
            infowindow.close();
          }

          const newInfowindow = new window.kakao.maps.InfoWindow({
            content,
          });

          // 클릭한 마커에 새로운 InfoWindow 열기
          newInfowindow.open(newMap, marker);

          // 열린 InfoWindow를 상태로 저장
          setInfowindow(newInfowindow);
        };

        // 첫 번째 마커 추가
        const markerPosition1 = new window.kakao.maps.LatLng(36.149977533082, 127.12538241968123);
        const marker1 = new window.kakao.maps.Marker({
          position: markerPosition1,
        });

        // 첫 번째 마커 클릭 이벤트 등록
        window.kakao.maps.event.addListener(marker1, 'click', function () {
          handleMarkerClick(marker1, '첫 번째 마커 정보');
        });

        marker1.setMap(newMap);

        // 두 번째 마커 추가
        const markerPosition2 = new window.kakao.maps.LatLng(36.18596441559727, 127.10232175842715);
        const marker2 = new window.kakao.maps.Marker({
          position: markerPosition2,
        });

        // 두 번째 마커 클릭 이벤트 등록
        window.kakao.maps.event.addListener(marker2, 'click', function () {
          handleMarkerClick(marker2, '두 번째 마커 정보');
        });

        marker2.setMap(newMap);

        setMap(newMap);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, [infowindow]);

  return (
    <div style={{ margin: '0 auto' }}>
      <div id="map" style={{ width: '1370px', height: '450px', margin: '10px 0 10px 0' }}></div>
      {/* Render other components */}
    </div>
  );
}
