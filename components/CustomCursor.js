"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const observeProjects = () => {
      const items = document.querySelectorAll("[data-cursor-expand]");
      items.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return items;
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    const items = observeProjects();
    const observer = new MutationObserver(() => observeProjects());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      items.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height] duration-300 ease-out ${
        hovered ? "w-24 h-24" : "w-10 h-10"
      }`}
    >
      <span
        ref={textRef}
        className={`text-black text-xs font-[Montserrat] font-semibold uppercase transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ver más
      </span>
    </div>
  );
};

export default CustomCursor;
