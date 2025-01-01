"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import {
  FluentGlobeDesktop24Filled,
  GgMenuLeft,
  GravityUiCode,
  MdiCloseOutline,
  MdiEmailPlus,
  TablerUserCheck,
  UilSuitcase,
} from "@/icons/icons";
import Logo from "@/icons/icons";

export default function NavbarUI() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const menuItems = [
    { label: "Experiencia", href: "#experiencia", Icon: UilSuitcase },
    { label: "Proyectos", href: "#proyectos", Icon: GravityUiCode },
    {
      label: "Tecnologías",
      href: "#tecnologias",
      Icon: FluentGlobeDesktop24Filled,
    },
    { label: "Sobre mí", href: "#sobre-mi", Icon: TablerUserCheck },
    { label: "Contacto", href: null, Icon: MdiEmailPlus },
  ];

  const handleContact = () => {
    window.location.href = "mailto:delfinoerlan@gmail.com";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleActiveLink = () => {
    const sections = menuItems.filter((item) => item.href !== null);
    let currentSection = "";

    sections.forEach((section) => {
      const element = document.querySelector(section.href || "");
      if (element && element instanceof HTMLElement) {
        const { offsetTop, offsetHeight } = element;
        if (
          window.scrollY >= offsetTop - 100 &&
          window.scrollY < offsetTop + offsetHeight
        ) {
          currentSection = section.href;
        }
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleActiveLink);

    // Cerrar el sidebar cuando se haga scroll
    const handleScroll = () => {
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleActiveLink);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      {/* Barra de navegación */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between z-50 w-full bg-black bg-opacity-55">
        <div className="text-white w-full h-16 flex items-center mx-8 rounded-2xl">
          {/* Iconos de abrir y cerrar el sidebar */}
          <div className="md:hidden mr-12">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <MdiCloseOutline className="w-6 h-6" />
              ) : (
                <GgMenuLeft className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo y nombre */}
          <div className="flex w-20 items-center justify-start">
            <Link href="#">
              {" "}
              {/* Link que hace scroll hacia el inicio de la página */}
              <Logo className="w-[4rem] h-14 mr-2 text-white cursor-pointer" />
            </Link>
          </div>

          {/* Menú de navegación */}
          <div className="w-full flex items-center justify-center mr-0 xl:mr-20">
            <div className="hidden md:flex space-x-6 justify-center w-full">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer transition-colors py-4 items-center ${
                    activeLink === item.href ? "text-orange-400" : "text-white"
                  }`}
                  onClick={
                    item.label === "Contacto" ? handleContact : undefined
                  }
                >
                  <item.Icon className="mr-2 w-5 h-5" />
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        menuItems={menuItems}
        activeLink={activeLink}
        handleContact={handleContact}
      />
    </div>
  );
}
