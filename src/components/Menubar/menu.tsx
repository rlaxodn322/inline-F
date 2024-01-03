// components/MenuBar.tsx
import Link from 'next/link';
import styles from './style'; // CSS 모듈을 사용할 경우

const MenuBar: React.FC = () => {
  return (
    <nav className={styles.menuBar}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {/* 추가적인 메뉴 항목들 */}
      </ul>
    </nav>
  );
};

export default MenuBar;
