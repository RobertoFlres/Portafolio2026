import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProyectosMuestra from "@/components/ProyectosMuestra";
import Servicios from "@/components/Servicios";
import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <ProyectosMuestra />
        <Servicios />
        <AboutMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}