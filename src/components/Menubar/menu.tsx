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
          <Link key={index} href={item.href}>
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
        ))}
      </div>
    </>
  );
};

export default MenuBar;
