'use client';
import React, { useState, useRef, useEffect } from 'react';
import CustomButton from '@/components/button';
import Link from 'next/link';
import AboutMe from '@/components/about-me';
export default function TopBar() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const handleAboutMe = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowAboutMe(true);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (aboutMeRef.current && !aboutMeRef.current.contains(e.target as Node)) {
      setShowAboutMe(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="flex flex-row lg:w-[768px] justify-between my-5">
        <Link href="/" className="text-sky-500 text-[24px]">
          何阳的博客
        </Link>
        <div onClick={handleAboutMe} ref={aboutMeRef} className="relative">
          <CustomButton buttonType="primary" className="select-none">
            关于我
          </CustomButton>
          {showAboutMe && <AboutMe />}
        </div>
      </header>
    </div>
  );
}
