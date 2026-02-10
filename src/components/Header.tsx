import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Header.css';

const navItems = ['Work', 'About', 'Contact'];

const Header = () => {
  return (
    <header className="header-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="logo"
      >
        Personal projects<span>.</span>
      </motion.div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink key={item} text={item} />
        ))}
      </nav>
    </header>
  );
};

const NavLink = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const petals = [
    { x: -18, y: -18, color: 'var(--primary)' },
    { x: 18, y: -18, color: 'var(--accent)' },
    { x: 0, y: -25, color: 'var(--chart-2)' },
  ];

  return (
    <motion.div
      className="nav-item-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="nav-text">{text}</span>

      <AnimatePresence>
        {isHovered && petals.map((petal, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full blur-[1px]"
            style={{ backgroundColor: petal.color, left: '50%', top: '0' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: petal.x, y: petal.y }}
            exit={{ scale: 0, opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;