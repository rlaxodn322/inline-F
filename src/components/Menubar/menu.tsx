import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { href: '/auth/page1', label: '인라인 스피드' },
  { href: '/auth/page2', label: '스키' },
  { href: '/auth/page3', label: '어린이체육교실' },
  { href: '/auth/page4', label: '자료실' },
  { href: '/auth/page5', label: '커뮤니티' },
  { href: '/auth/page6', label: '타이거하우스소개' },
  { href: '/auth/page7', label: '오프라인매장' },
];

const MenuBar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div style={{ display: 'flex', background: 'white', justifyContent: 'center' }}>
        {menuItems.map((item, index) => (
          <div key={index} style={{ position: 'relative' }}>
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
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'white',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  zIndex: 1,
                }}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <div key={subIndex} style={{ padding: '10px' }}>
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
