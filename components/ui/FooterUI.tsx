"use client";
import React from "react";

export const FooterUI = () => {
  const handleContact = () => {
    window.location.href = "mailto:delfinoerlan@gmail.com";
  };

  return (
    <footer className="bg-black bg-opacity-55 text-white py-1 transition-colors duration-300 rounded-lg">
      <div>
        <div className="py-2 border-t border-gray-700 text-center ">
          <div>
            <p>© Casi todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
