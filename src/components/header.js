"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header({ info, style = "" }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const menuMobileRef = useRef(null);
    const menuButtonRef = useRef(null);

    const [
        isActiveHome,
        isActiveAbout,
        isActivePortfolio,
        isActiveBlog,
        isActiveAchivements,
    ] = useActiveRoute("/", "/about", "/portfolio", "/blog", "/achivements");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

  return (
    <header className="bg- text-gray-800 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={150}
              height={50}
            />
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}