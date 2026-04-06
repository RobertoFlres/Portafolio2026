import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] pb-10 overflow-hidden">
      <div className="px-4 md:px-8 pb-8 flex flex-col md:flex-row justify-between gap-8">
        <ul className="font-montserrat font-light text-[#ece8e0] text-sm md:text-base leading-relaxed space-y-1">
          <li>email: hola@robertoflores.com</li>
          <li>based in: Chihuahua, Mexico</li>
          <li>disponible para: Proyectos Freelancer & Full-Time</li>
        </ul>
        <div className="flex gap-10 md:gap-16 font-montserrat font-light text-[#ece8e0] text-sm md:text-base">
          <div>
            <p className="text-[#aba8a3] mb-2">Pages</p>
            <ul className="space-y-1">
              <li><Link href="/work" className="hover:text-white transition-colors">Proyectos</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Me</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[#aba8a3] mb-2">Socials</p>
            <ul className="space-y-1">
              <li><a href="https://www.instagram.com/roberto_.flores/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://x.com/f_rbrt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a></li>
              <li><a href="https://www.linkedin.com/in/robfloresesp/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="font-[Helvetica_Now] font-black text-[#ece8e0] w-full text-center text-[13.5vw] leading-none">
        roberto flores
      </h2>
      <div className="mx-4 md:mx-8 mt-6 border-t border-[#333]" />
      <p className="font-montserrat font-light text-[#aba8a3] text-sm text-left px-4 md:px-8 mt-6">
        © 2026 Roberto Flores. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
