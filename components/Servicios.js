const Servicios = () => {
  return (
    <section
      className="pt-10 pb-24 md:pt-16 md:pb-32 bg-[#141414] text-[#ece8e0]"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
      <div className="px-4 md:px-8 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <h2 className="font-[RealHeadWeb04-Medium] text-white text-4xl md:text-5xl lg:text-7xl tracking-tight text-left uppercase leading-tight">
          CÓMO PUEDO<br />AYUDARTE
        </h2>
        <p className="font-[Montserrat] font-light text-white text-sm lg:text-base uppercase leading-snug text-left md:mr-[10vw] md:mt-20">
          UNA BUENA MARCA NO SE VE BONITA.<br />SE SIENTE VERDADERA.
        </p>
      </div>

      <div className="px-4 md:px-8 mt-16 md:mt-24">
        {[
          { label: "NAMING · LOGO · SISTEMA VISUAL", title: "IDENTIDAD DE MARCA" },
          { label: "ESTRATEGIA · IDENTIDAD · APLICACIONES", title: "BRANDING COMPLETO" },
          { label: "REDES SOCIALES · PIEZAS GRÁFICAS · CONTENIDO", title: "DISEÑO DIGITAL" },
          { label: "INTERFACES · SITIOS WEB · DISEÑO DE PRODUCTO", title: "UI & WEB" },
        ].map((item, i) => (
          <div
            key={i}
            className="group py-4 md:py-6 flex items-center justify-between cursor-pointer relative"
          >
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#333]" />
            <div className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-700 ease-out" />
            <div>
              <span className="font-[Montserrat] text-[#aba8a3] text-[10px] md:text-xs tracking-widest uppercase">
                {item.label}
              </span>
              <h3 className="font-[RealHeadPro-SemiLight] text-white text-2xl md:text-4xl lg:text-6xl uppercase mt-2">
                {item.title}
              </h3>
            </div>
            <div className="absolute bottom-[1px] right-[15%] w-64 h-0 bg-[#2a2a2a] group-hover:h-[80%] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom hidden md:block" />
            <span className="text-white text-xl md:text-2xl lg:text-3xl relative z-10 inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4">→</span>
          </div>
        ))}
        <div className="border-t border-[#333]" />
      </div>
      </div>
    </section>
  );
};

export default Servicios;
