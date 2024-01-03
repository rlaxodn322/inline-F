import React, { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { href: '/page1', label: '인라인 스피드' },
  { href: '/page2', label: '스키' },
  { href: '/page3', label: '어린이체육교실' },
  { href: '/page4', label: '자료실' },
  { href: '/page5', label: '커뮤니티' },
  { href: '/page6', label: '타이거하우스소개' },
  { href: '/page7', label: '오프라인매장' },
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
          <Link key={index} href={item.href}>
            <div
              style={{
                padding: '20px',
                cursor: 'pointer',
                color: index === hoveredIndex ? 'lightblue' : 'black',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuBar;
