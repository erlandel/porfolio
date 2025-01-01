"use client";
import AboutMeSection from '@/components/section/AboutMeSection';
import ExperienceSection from '@/components/section/ExperienceSection';
import IntroSection from '@/components/section/IntroSection';
import ProjectsSection from '@/components/section/ProjectsSection';
import { TechnologiesSection } from '@/components/section/TechnologiesSection';
import TypingEffect from '@/components/typingEffect/TypingEffect';






export default function Home() {


  const handleContact = () => {
    window.location.href = "mailto:delfinoerlan@gmail.com";
  };

  const handleNavigation = (url: string) => {
    window.open(url, "_blank");
  };




  return (
    <div>
      <section className='mx-4 mt-4 flex items-center justify-center'>
        <TypingEffect  text="Keep creating, every line of code is a step towards the future!" />
      </section>

      <section  className='mx-8 mt-[5rem]'>
        <IntroSection handleContact={handleContact} />
      </section>


      <div id="experiencia" className='mx-4 mt-[10rem] scroll-mt-20'>
        <ExperienceSection />
      </div>

      <section id="proyectos" className='mx-4 mt-[10rem] scroll-mt-20'>
        <ProjectsSection handleNavigation={handleNavigation} />
      </section>

      <section id="tecnologias" className='scroll-mt-20'>
        <TechnologiesSection />
      </section>



      <section id="sobre-mi" className='mt-[10rem] mb-[17rem] mx-4  scroll-mt-20'>
        <AboutMeSection />
      </section>




    </div>
  );
}
