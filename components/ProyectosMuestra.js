import projects from "@/data/projects";

const ProyectosMuestra = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-[#141414] text-[#ece8e0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto md:grid-rows-2 gap-4">
          {featured.map((project, i) => (
            <a
              key={i}
              href={`/work/${project.slug}`}
              data-cursor-expand
              className="group aspect-square bg-[#2a2a2a] relative flex items-end p-4 md:p-6 cursor-pointer overflow-hidden"
            >
              {(project.coverSquare || project.cover) && (
                <img
                  src={project.coverSquare || project.cover}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <h3 className="font-[Helvetica_Now] font-bold text-[#ece8e0] group-hover:text-white group-hover:opacity-100 text-lg md:text-xl uppercase opacity-80 relative z-10 transition-all duration-300">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
        <div className="text-right mt-10">
          <a
            href="/work"
            className="font-[RealHeadWeb04-Medium] text-white text-xl md:text-3xl hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >
            Ver todos los proyectos <span className="inline-block rotate-[30deg]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProyectosMuestra;
