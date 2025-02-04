import { TablerUserCheck } from "@/icons/icons";
import { Avatar } from "@nextui-org/react";

const AboutMeSection: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <TablerUserCheck className="mr-2" />
        <h2 className="text-2xl">Sobre mí</h2>
      </div>

      <div className="flex flex-col items-center mt:-8 sm:mt-4  gap-10 text-justify md:flex-row md:justify-center">
        <div className="order-2 md:order-1 ">
          <p>
            Me llamo Erlan Delfino, y mi incursión en el mundo de la
            programación{" "}
            <span className="bg-gradient-to-tr from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              comenzó en 2021, cuando inicié mis estudios en la Universidad de
              Ciencias Informáticas
            </span>
            . Poco tiempo después descubrí mi pasión por el desarrollo web, un
            área que me permite combinar creatividad con lógica para crear
            soluciones innovadoras.
          </p>

          <p className="mt-6">
            Actualmente, estoy cursando el último año de mi carrera, y a lo
            largo de este tiempo he tenido la oportunidad de{" "}
            <span className="bg-gradient-to-tr from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              desarrollar diversos proyectos, tanto académicos como
              profesionales, colaborando con empresas
            </span>{" "}
            en la creación de soluciones tecnológicas funcionales y atractivas.
          </p>
        </div>

        <div className="order-1 mt-8 sm:mt-0">
          <Avatar
            className="w-36 h-36 md:w-56 md:h-56 transform rotate-6"
            isBordered
            radius="sm"
            src="images/avatar/2.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
