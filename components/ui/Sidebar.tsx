import React from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string | null;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SidebarProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  activeLink: string;
  handleContact: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  menuItems,
  activeLink,
  handleContact,
}) => {
  return (
    <div
      className={`fixed inset-0 z-40 mt-[4.1rem] transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="bg-black bg-opacity-55 w-52 h-96 p-6 text-white">
        <h2 className="text-xl font-bold mb-6">Menú</h2>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex cursor-pointer transition-colors py-4 items-center ${
              activeLink === item.href ? "text-orange-400" : "text-white"
            }`}
            onClick={item.label === "Contacto" ? handleContact : undefined}
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
  );
};

export default Sidebar;
