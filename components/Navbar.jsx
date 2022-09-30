import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="flex flex-col text-center rounded-xl">
          <Link href="/">
            <img src="../logo.png" alt="logo" width="120px" className='mx-auto rounded-lg cursor-pointer opacity-100' />
          </Link>
          {/* <Link href="/">
            <span className=" font-bold text-5xl  text-pink-300">Blog</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;