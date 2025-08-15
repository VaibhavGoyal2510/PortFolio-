import React from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold tracking-tight">Vaibhav Goyal</div>
        <ul className="flex gap-6 text-lg">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-400 transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;