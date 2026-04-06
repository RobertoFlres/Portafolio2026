const AboutMe = () => {
  return (
    <section className="bg-[#141414] text-[#ece8e0] overflow-hidden" id="about">
      <div className="max-w-7xl mr-auto pl-4 pr-4 md:pr-8 pt-10 pb-24 md:pt-16 md:pb-32">

        {/* Nombre + foto circular */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="font-[RealHeadPro-SemiLight] text-[#ece8e0] text-[12vw] md:text-[9vw] leading-none uppercase">
            ROBERTO<br />FLORES
          </h2>
          <img
            src="/images/ChatGPT Image 4 mar 2026, 12_22_57 a.m..png"
            alt="Roberto Flores"
            className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full object-cover object-[center_25%] shrink-0 grayscale"
          />
        </div>

        {/* Quién soy */}
        <div className="mt-16 md:mt-24 max-w-lg">
          <span className="font-montserrat text-[#aba8a3] text-xs tracking-[0.3em] uppercase block mb-6">
            ( QUIÉN SOY )
          </span>
          <p className="font-montserrat font-light text-white text-sm md:text-base leading-relaxed">
            Soy Roberto Flores, diseñador de branding
            basado en Chihuahua. Trabajo con startups,
            negocios locales y marcas en crecimiento que
            quieren verse al nivel al que quieren llegar.
          </p>
        </div>

        {/* Dos bloques de texto */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          <div>
            <span className="font-montserrat text-[#aba8a3] text-xs tracking-[0.3em] uppercase block mb-6">
              ( POR QUÉ TRABAJAR CONMIGO )
            </span>
            <p className="font-montserrat font-light text-white text-sm md:text-base leading-relaxed">
              No me interesa solo hacer algo bonito.
              Me interesa entender qué quiere lograr tu
              proyecto, a quién le habla y qué problema
              está resolviendo. A partir de ahí construyo
              la identidad visual con intención. Pienso
              como creativo, pero entiendo el mundo startup.
              Me involucro en el proceso completo, desde
              la idea hasta la ejecución — como si el
              proyecto fuera mío.
            </p>
          </div>

          <div>
            <span className="font-montserrat text-[#aba8a3] text-xs tracking-[0.3em] uppercase block mb-6">
              ( CUANDO NO ESTOY DISEÑANDO )
            </span>
            <p className="font-montserrat font-light text-white text-sm md:text-base leading-relaxed">
              Sigo construyendo. Participo en la organización
              de eventos, colaboro en proyectos creativos y
              me muevo en entornos donde se están haciendo
              cosas nuevas. Analizo marcas, observo tendencias
              y busco inspiración en lugares inesperados.
              No desconecto del todo — solo recargo ideas
              para volver con más.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
