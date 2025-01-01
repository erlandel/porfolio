import { Image } from "@nextui-org/react";

type ImageUIProps = {
  src: string; // URL de la imagen
  alt?: string; // Texto alternativo opcional
  isBlurred?: boolean; // Opcional, permite controlar el desenfoque
};

export default function ImageUI({
  src,
  alt = "Image",
  isBlurred = true,
}: ImageUIProps) {
  return (
    <Image
      isZoomed
      isBlurred={isBlurred}
      alt={alt}
      src={src}
      width={500}
      height={250}
    />
  );
}
