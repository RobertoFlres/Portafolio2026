"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#141414] z-50">
      <nav className="mx-auto px-4 h-14 flex items-center justify-between font-[Helvetica_Now] font-bold text-white text-[16px]">
        <Link href="/" className="tracking-wide no-underline hover:opacity-70 transition-opacity">roberto flores</Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 [&:has(>:hover)>*]:opacity-30 [&>*]:transition-opacity [&>*]:duration-300">
          <Link href="/work" className="no-underline hover:!opacity-100">work</Link>
          <Link href="/#about" className="no-underline hover:!opacity-100">about me</Link>
          <Link href="/#contact" className="no-underline hover:!opacity-100">start a project</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#141414] px-4 pb-6 flex flex-col gap-4 font-[Helvetica_Now] font-bold text-white text-[16px] border-t border-[#333]">
          <Link href="/work" className="no-underline py-2" onClick={() => setMenuOpen(false)}>work</Link>
          <Link href="/#about" className="no-underline py-2" onClick={() => setMenuOpen(false)}>about me</Link>
          <Link href="/#contact" className="no-underline py-2" onClick={() => setMenuOpen(false)}>start a project</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
