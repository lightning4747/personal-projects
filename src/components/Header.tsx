import React, { useState } from 'react';
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

  // Floral "petals" positions
  const petals = [
    { x: -15, y: -15, delay: 0 },
    { x: 15, y: -15, delay: 0.1 },
    { x: 0, y: -20, delay: 0.2 },
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
            className="petal"
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              x: petal.x, 
              y: petal.y,
              rotate: 45 * i 
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: petal.delay }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;