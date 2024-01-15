import React, { useEffect, useState } from 'react';

const KAKAO_API_KEY = '1d7c8ad49ee868885a1d1bab7e46d818'; // Kakao API Key

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  const [map, setMap] = useState<any>(null);
  const [infowindow, setInfowindow] = useState<any>(null);
  const [clickedMarker, setClickedMarker] = useState<any>(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(36.149977533082, 127.12538241968123),
          level: 8,
        };

        const newMap = new window.kakao.maps.Map(container, options);

        // 첫 번째 마커 추가
        const marker1 = addMarker(
          newMap,
          36.149977533082,
          127.12538241968123,
          '주소: 충남 논산시 은진면 매죽헌로 331, 논산학생롤러경기장1',
        );

        // 두 번째 마커 추가
        const marker2 = addMarker(
          newMap,
          36.18596441559727,
          127.10232175842715,
          '주소: 충남 논산시 시민로184번길 39-8, 타이거하우스1',
        );

        setMap(newMap);
      });
    };

    const addMarker = (map: any, lat: number, lng: number, content: string) => {
      const markerPosition = new window.kakao.maps.LatLng(lat, lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
        handleMarkerClick(marker, content);
      });

      marker.setMap(map);

      return marker;
    };

    const handleMarkerClick = (marker: any, content: string) => {
      if (infowindow) {
        infowindow.close();
      }

      const newInfowindow = new window.kakao.maps.InfoWindow({
        content,
      });

      setInfowindow(newInfowindow);
      setClickedMarker(marker);
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, [infowindow, clickedMarker]);

  useEffect(() => {
    if (infowindow && clickedMarker && map) {
      infowindow.open(map, clickedMarker);
    }
  }, [infowindow, clickedMarker, map]);

  return (
    <div>
      <div id="map" style={{ width: '1000px', height: '450px', margin: '10px 0 10px 0' }}></div>
      {/* Render other components */}
    </div>
  );
}
