import React from "react";
import {
  MdiEmailPlus,
  StreamlineBusinessUserCurriculumSolid,
} from "@/icons/icons";
import ButtonNext from "../next_ui_components/button/ButtonNext";
import { Avatar } from "@nextui-org/react";

interface ProfileCardProps {
  handleContact: () => void;
}

const IntroSection: React.FC<ProfileCardProps> = ({ handleContact }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-[25rem] xl:w-[30rem] mt-4 xl:mt-0 order-2 md:order-1">
          <h1 className="text-2xl m-2 text-center">
            Hola,{" "}
            <span className="bg-gradient-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              soy Erlan G.
            </span>
          </h1>

          <p className=" sm:text-md md:text-lg text-justify">
            Futuro Ingeniero en Ciencias Informáticas, tengo +1 año de
            experiencia en el desarrollo frontend de aplicaciones web,
            combinando diseño moderno con funcionalidades eficientes para crear
            experiencias digitales únicas.
          </p>

          <div className="m-2 flex items-center justify-between ">
            <div className="w-32 sm:w-40">
              <ButtonNext
                icon={<MdiEmailPlus className="w-5 h-5" />}
                text="Contáctame"
                onClick={handleContact}
              />
            </div>

            <div className="w-32 sm:w-40">
              <ButtonNext
                icon={
                  <StreamlineBusinessUserCurriculumSolid className="w-5 h-5" />
                }
                text="Curriculo"
              />
            </div>
          </div>
        </div>

        <div className="order-1">
          <Avatar
            className="w-36 h-36 md:w-56 md:h-56"
            isBordered
            src="images/avatar/1.webp"
            alt="Erlan G. Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
