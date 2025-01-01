import { ArcticonsWriteilypro } from "@/icons/icons";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";

interface TypingEffectProps {
  text: string; // Texto que se va a escribir
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [isTyping, setIsTyping] = useState(true); // Controla si el ícono se muestra

  return (
    <div
      className="font-mono text-3xl bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-400
 bg-clip-text text-transparent text-center flex items-center"
    >
      <div className="flex items-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(text)
              .callFunction(() => {
                setIsTyping(false);
              })
              .start();
          }}
          options={{
            cursor: "", // Elimina el cursor predeterminado
          }}
        />
        {isTyping && ( // Muestra el ícono solo mientras se está escribiendo
          <div className="animate-blink ml-1">
            <ArcticonsWriteilypro />
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingEffect;
