import ImageUI from "@/components/next_ui_components/imageUI/ImageUi";
import { ReactNode } from "react";
import Image from "next/image";

type InfoSectionProps = {
  imageSrc: string;
  title: string;
  highlight?: ReactNode;
  description: string;
  children?: ReactNode;
};

export default function SectionProyect({
  imageSrc,
  title,
  highlight,
  description,
  children,
}: InfoSectionProps) {
  return (
    <div className="flex flex-col  gap-4 items-start  md:flex-row  md:justify-between md:gap-14 md:mt-0">
      <div className="w-full sm:w-[30rem] md:w-1/2 flex justify-center items-center">
        <ImageUI src={imageSrc} alt={title} />
      </div>

      {/* Contenido de texto */}
      <div className="w-full sm:w-[30rem] md:w-1/2 ">
        <div>
          <h1 className="text-xl mb-2">
            {title}{" "}
            {highlight && (
              <span className="inline-flex items-start">{highlight}</span>
            )}
          </h1>
          <div className="flex  items-center gap-4 mt-4">
            <div className="relative w-28 h-8 rounded-3xl flex justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-35 rounded-3xl"></div>
              <div className="relative flex items-center">
                <Image
                  src={"/images/technologies/nextjs_icon_dark.svg"}
                  alt="next js"
                  width={20}
                  height={20}
                />
                <p className="ml-2">Next js</p>
              </div>
            </div>

            <div className="relative w-32 h-8 rounded-3xl flex justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-35 rounded-3xl pointer-events-none"></div>
              <div className="relative flex items-center">
                <Image
                  src={"/images/technologies/tailwindcss.svg"}
                  alt="tailwindcss"
                  width={20}
                  height={20}
                />
                <p className="ml-2">Tailwindcss</p>
              </div>
            </div>
          </div>
          <p className="text-md text-justify mt-4">{description}</p>
        </div>

        {/* Renderizar cualquier contenido adicional */}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
