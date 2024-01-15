import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { label: '타이거하우스소개', subMenu: ['히스토리', '강사진', '찾아오는길'] },
  {
    label: '인라인스케이트',
    subMenu: ['레이싱반', '피트니스반', '자격증반', '특수체육'],
    subMenu2: [
      ['(레이싱)커리큐럼', '강습신청,비용'],
      ['(피트니스)커리큐럼', '강습신청,비용'],
      ['(자격증)커리큐럼', '강습신청,비용'],
      ['(특수체육)커리큐럼', '강습신청,비용'],
    ],
  },
  { label: '선수트레이닝(부상복귀,개인PT)', subMenu: ['히스토리', '신청,비용'] },
  {
    label: '스키',
    subMenu: ['레이싱반'],
    subMenu2: [['(레이싱)커리큐럼', '강습신청,비용']],
  },
  {
    label: '매장',
    subMenu: ['오프라인', '온라인'],
    subMenu2: [['소개 및 찾아오는길', '판매품목']],
  },
  { label: '커뮤니티', subMenu: ['인스타그램', '유튜브', '기타 소식'] },
];

const MenuBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubMenu2, setActiveSubMenu2] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Next.js router

  const handleMenuClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setActiveSubMenu2(null);
    }
  };

  const handleSubMenuClick = (index: number) => {
    setActiveSubMenu2(index);
  };

  const handleSubMenu2Click = (url: string) => {
    // subMenu2 아이템 클릭 시, 지정된 URL로 이동
    router.push('/auth/page6');
  };

  const handleFindUsClick = () => {
    // "찾아오는길" 클릭 시, 지정된 URL로 이동
    router.push('/auth/page6');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
        setActiveSubMenu2(null);
      }

      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubMenu2(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ display: 'flex', background: 'white', justifyContent: 'center', paddingLeft: '80px' }} ref={menuRef}>
      {menuItems.map((item, index) => (
        <div key={index} style={{ position: 'relative', paddingRight: '50px' }}>
          <div
            onClick={() => handleMenuClick(index)}
            style={{
              padding: '20px',
              cursor: 'pointer',
              color: index === activeIndex ? 'lightblue' : 'black',
            }}
          >
            {item.label}
          </div>

          {index === activeIndex && item.subMenu && (
            <div
              ref={submenuRef}
              style={{
                position: 'absolute',
                top: '100%',
                left: 'auto',
                background: 'white',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 2,
                marginTop: '1px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                minWidth: '180px',
              }}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  onClick={() => (subItem === '찾아오는길' ? handleFindUsClick() : handleSubMenuClick(subIndex))}
                  style={{ padding: '10px', borderBottom: '1px solid #eee', cursor: 'pointer' }}
                >
                  {subItem}
                  {activeSubMenu2 === subIndex && item.subMenu2 && item.subMenu2[subIndex] && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: 0,
                        left: '100%',
                        background: 'white',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        zIndex: 2,
                        marginTop: '0px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        minWidth: '180px',
                      }}
                    >
                      {item.subMenu2[subIndex].map((subItem2, subIndex2) => (
                        <div
                          key={subIndex2}
                          style={{ padding: '10px', borderBottom: '1px solid #eee', cursor: 'pointer' }}
                          onClick={() => handleSubMenu2Click(subItem2)}
                        >
                          {subItem2}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
