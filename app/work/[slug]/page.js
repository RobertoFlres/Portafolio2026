import { Suspense } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-[#141414] text-[#ece8e0] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-2xl">
            <span className="font-[Montserrat] text-[#aba8a3] text-xs tracking-[0.3em] uppercase block mb-4">
              {project.category}
            </span>
            <h1 className="font-[RealHeadPro-SemiLight] text-white text-6xl md:text-9xl uppercase">
              {project.title}
            </h1>
            <p className="font-[Montserrat] font-light text-[#aba8a3] text-sm md:text-base uppercase tracking-wide mt-6 leading-relaxed">
              {project.description}
            </p>
          </div>
          {project.cover ? (
            <img src={project.cover} alt={project.title} className="mt-16 w-full aspect-[16/9] object-cover" />
          ) : (
            <div className="mt-16 w-full aspect-[16/9] bg-[#2a2a2a]" />
          )}
          <p className="font-[Montserrat] font-light text-white text-base md:text-xl uppercase tracking-wide mt-8 max-w-3xl leading-relaxed">
            {project.longDescription}
          </p>
          <h2 className="font-[RealHeadPro-SemiLight] text-white text-5xl md:text-8xl uppercase mt-20">
            proceso
          </h2>
          <p className="font-[Montserrat] font-light text-white text-base md:text-xl uppercase tracking-wide mt-8 max-w-5xl leading-relaxed line-clamp-3">
            {project.process}
          </p>
          <div className="mt-16 flex flex-col md:flex-row gap-8 md:items-start">
            {project.image2 ? (
              <img src={project.image2} alt={project.title} className="w-full md:w-[45%] object-contain shrink-0" />
            ) : (
              <div className="w-full md:w-[45%] aspect-square bg-[#2a2a2a] shrink-0" />
            )}
            <div className="w-full md:flex-1 flex flex-col gap-8">
              <p className="font-[Montserrat] font-light text-white text-sm md:text-base uppercase tracking-wide leading-relaxed flex-1">
                {project.processDetail || project.longDescription}
              </p>
              {project.image3 ? (
                <img src={project.image3} alt={project.title} className={`w-full object-contain ${project.image3Offset || ""}`} />
              ) : (
                <div className="w-full aspect-[1.68/1] bg-[#2a2a2a]" />
              )}
            </div>
          </div>
          <div className="-mt-16 md:-mt-24 flex flex-col md:flex-row items-start justify-between gap-8">
            <div className={`ml-0 md:ml-8 ${project.impactOffset || ""}`}>
              <h2 className="font-[RealHeadPro-SemiLight] text-white text-5xl md:text-8xl uppercase">
                impacto
              </h2>
              <p className="font-[Montserrat] font-light text-white text-sm md:text-base uppercase tracking-wide leading-relaxed mt-6 max-w-md">
                {project.impact}
              </p>
            </div>
            {project.image4 ? (
              <img src={project.image4} alt={project.title} className="w-full md:w-1/2 object-contain shrink-0 mt-32 md:mt-48" />
            ) : (
              <div className="w-full md:w-1/2 aspect-square bg-[#2a2a2a] shrink-0 mt-32 md:mt-48" />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
