import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/data/projects";

export default function WorkPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-[#141414] text-[#ece8e0] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex justify-between items-start mb-16">
            <p className="font-[Montserrat] font-normal text-white text-base md:text-lg max-w-md leading-relaxed">
              Branding, identidad visual y diseño digital proyectos construidos con propósito
            </p>
            <span className="text-white text-4xl inline-block rotate-[120deg]">→</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
            {projects.map((project, i) => (
              <a key={i} href={`/work/${project.slug}`} className="group" data-cursor-expand>
                <div className="aspect-square bg-[#2a2a2a] w-full relative overflow-hidden">
                  {(project.coverSquare || project.cover) && (
                    <img src={project.coverSquare || project.cover} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                <h3 className="font-[Helvetica_Now] font-bold text-[#ece8e0] text-lg mt-4">
                  {project.title}
                </h3>
                <p className="font-[Montserrat] font-light text-[#aba8a3] text-sm mt-1">
                  {project.category}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
