import CustomButton from '@/components/button';
import Link from 'next/link';
import React from 'react';
export default function TopBar() {
  return (
    <header className="flex flex-row lg:w-[768px] justify-between my-5">
      <Link href="/" className="text-sky-500 text-[24px]">
        何阳的博客
      </Link>
      <div>
        <CustomButton buttonType="primary">关于我</CustomButton>
      </div>
    </header>
  );
}
