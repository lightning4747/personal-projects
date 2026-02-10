import { motion } from 'framer-motion';

const navItems = [
  { name: 'GitHub', link: 'https://github.com/lightning4747' },
  { name: 'Email', link: 'mailto:vignesh112847@gmail.com' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-[10%] py-8 flex justify-between items-center z-50 bg-transparent pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-extrabold tracking-tighter text-2xl text-neutral-900 pointer-events-auto"
      >
        Personal projects<span className="text-[#ffb7c5]">.</span>
      </motion.div>

      <nav className="flex gap-4 pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target={item.name === 'GitHub' ? '_blank' : undefined}
            rel={item.name === 'GitHub' ? 'noopener noreferrer' : undefined}
            className="px-4 py-2 rounded-lg font-medium text-neutral-700 hover:text-black transition-all duration-500 ease-in-out hover:shadow-lg bg-white/20 backdrop-blur-sm border border-transparent hover:border-white/40"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;