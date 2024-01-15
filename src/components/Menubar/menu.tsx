import React, { useState, useRef } from 'react';
import Link from 'next/link';

const menuItems = [
  { href: '/auth/page1', label: '인라인 스피드', subMenu: ['히스토리', '강사진', '커리큘럼'] },
  { href: '/auth/page2', label: '스키', subMenu: ['서브메뉴4', '서브메뉴5', '서브메뉴6'] },
  { href: '/auth/page3', label: '선수트레이닝& 부상 후 복귀 운동', subMenu: ['서브메뉴7', '서브메뉴8', '서브메뉴9'] },
  { href: '/auth/page4', label: '자료실', subMenu: ['서브메뉴10', '서브메뉴11', '서브메뉴12'] },
  { href: '/auth/page5', label: '1.', subMenu: ['서브메뉴13', '서브메뉴14', '서브메뉴15'] },
  { href: '/auth/page6', label: '타이거하우스소개', subMenu: ['서브메뉴16', '서브메뉴17', '서브메뉴18'] },
  { href: '/auth/page7', label: '오프라인매장', subMenu: ['인라인', '의류'] },
  { href: '/auth/page8', label: '기타', subMenu: ['서브메뉴22', '서브메뉴23', '서브메뉴24'] },
];

const MenuBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    // Check if the mouse is still inside the submenu before closing
    const relatedTarget = event.relatedTarget as Node;
    if (submenuRef.current && relatedTarget && !submenuRef.current.contains(relatedTarget)) {
      setHoveredIndex(null);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', background: 'white', justifyContent: 'center', paddingLeft: '80px' }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ position: 'relative', paddingRight: '50px' }}>
            <Link href={item.href}>
              <a
                style={{
                  padding: '20px',
                  cursor: 'pointer',
                  color: index === hoveredIndex ? 'lightblue' : 'black',
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
              </a>
            </Link>

            {/* 서브메뉴를 동적으로 렌더링합니다. */}
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
                  marginTop: '10px', // Adjust this value to create space between menu and submenu
                  border: '1px solid #ccc', // Add a border
                  borderRadius: '4px', // Add border radius for rounded corners
                  minWidth: '150px', // Set a minimum width
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
