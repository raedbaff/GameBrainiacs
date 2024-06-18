'use client';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white  dark:bg-gray-dark">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <Image
          src="/images/brain.png"
          alt="logo"
          width={280}
          height={140}
          className="mb-2 p-2"
        />
        <h4 className="text-lg font-semibold mb-1">Created by Raed Baffoun</h4>
        <h6 className="text-sm font-light">All rights reserved</h6>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/raed-baffoun-884088242/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 transition-colors duration-300 hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/raedbaff"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 transition-colors duration-300 hover:text-blue-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
