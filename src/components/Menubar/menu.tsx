import React, { useState, useRef } from 'react';
import Link from 'next/link';

const menuItems = [
  { href: '/auth/page1', label: '인라인 스피드', subMenu: ['히스토리', '강사진', '커리큘럼'] },
  { href: '/auth/page2', label: '스키', subMenu: ['히스토리', '강사진', '커리큘럼'] },
  { href: '/auth/page3', label: '선수트레이닝', subMenu: ['히스토리', '강사진', '커리큘럼'] },
  { href: '/auth/page4', label: '부상 후 복귀 운동', subMenu: ['히스토리', '강사진', '커리큘럼'] },
  { href: '/auth/page5', label: '매장', subMenu: ['인라인', '인라인용품'] },
  { href: '/auth/page6', label: '타이거하우스소개', subMenu: ['서브메뉴16', '서브메뉴17', '서브메뉴18'] },
];

const MenuBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setSubmenuVisible(false);
  };

  return (
    <>
      <div style={{ display: 'flex', background: 'white', justifyContent: 'center', paddingLeft: '80px' }}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{ position: 'relative', paddingRight: '50px' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={item.href}>
              <a
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  color: index === hoveredIndex ? 'lightblue' : 'black',
                }}
              >
                {item.label}
              </a>
            </Link>

            {index === hoveredIndex && item.subMenu && (
              <div
                ref={submenuRef}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'white',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  zIndex: 1,
                  marginTop: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  minWidth: '180px',
                  opacity: submenuVisible ? 1 : 0,
                  transform: `translateY(${submenuVisible ? '0%' : '-20%'})`,
                  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <div key={subIndex} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuBar;
