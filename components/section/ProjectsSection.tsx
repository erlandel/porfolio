import {
  ClarityPlaneSolid,
  FluentMdl2GitHubLogo,
  GravityUiCode,
  PajamasLink,
} from "@/icons/icons";
import SectionProyect from "@/interfaces/SectionProyect";
import React from "react";
import ButtonNext from "../next_ui_components/button/ButtonNext";

interface ProjectsSectionProps {
  handleNavigation: (url: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  handleNavigation,
}) => {
  const projects = [
    {
      imageSrc: "/images/proyect/eclipse.webp",
      title: "Eclipse Agency",

      description:
        "La aplicación permite a los usuarios buscar vuelos,reservar y gestionar boletos de manera eficiente.Creada desde cercon cero con Next.js, TailwindCSS y TypeScript.",
      codeUrl: "https://github.com/erlang/portafolio",
      previewUrl: "https://eclipse-frontend-production.up.railway.app/",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">
        <GravityUiCode className="mr-2" />
        <h2 className="text-2xl">Proyectos</h2>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="mt-16">
          <SectionProyect
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          >
            <div className="flex gap-4 justify-between md:justify-start mt-4">
              <div className="w-32">
                <ButtonNext
                  text="Code"
                  radius="md"
                  icon={<FluentMdl2GitHubLogo className="w-5 h-5" />}
                  onClick={() => handleNavigation(project.codeUrl)}
                  className="bg-gradient-to-bl from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                />
              </div>
              <div className="w-32">
                <ButtonNext
                  text="Preview"
                  radius="md"
                  icon={<PajamasLink className="w-5 h-5" />}
                  onClick={() => handleNavigation(project.previewUrl)}
                  className="bg-gradient-to-bl from-pink-500 to-yellow-500 text-white shadow-lg w-full"
                />
              </div>
            </div>
          </SectionProyect>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
