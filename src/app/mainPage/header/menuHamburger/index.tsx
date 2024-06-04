// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import SidebarIcons from '@/app/components/sidebarMenu/sidebarIcones';
import { RiGamepadFill, RiHome6Fill } from 'react-icons/ri';
import { BiSolidCategory } from 'react-icons/bi';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="bottom-0 left-0 w-full sm:hidden bg-gray-800">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link href="/">
                  <SidebarIcons
                    icon={RiHome6Fill}
                    name="Home"
                    linkToPage="/"
                />
                </Link>
                <Link href="/categorias">
                  <SidebarIcons
                    icon={BiSolidCategory}
                    name="Categorias"
                    linkToPage="/categorias"
                  />
                </Link>
                <Link href="/biblioteca">
                  <SidebarIcons
                    icon={RiGamepadFill}
                    name="Minha Biblioteca"
                    linkToPage="/biblioteca"
                  />
                </Link>
              </div>
            </div> */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-8 w-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <SidebarIcons
                icon={RiHome6Fill}
                name="Home"
                linkToPage="/"
                />
              <SidebarIcons
                icon={BiSolidCategory}
                name="Categorias"
                linkToPage="/categorias"
              />
              <SidebarIcons
                icon={RiGamepadFill}
                name="Minha Biblioteca"
                linkToPage="/biblioteca"
              />
            {/* Adicione mais links aqui, se necessário */}
          </div>
        </div>
      </nav>
  );
};