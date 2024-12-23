"use client"
import { signOutAction } from "@/app/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/icons/homeicon.svg",
        label: "Home",
        href: "/admin",
        visible: ["admin", "shelterWorker"],
      },
      {
        icon: "/icons/animals.svg",
        label: "Animals",
        href: "/list/animals",
        visible: ["admin", "shelterWorker"],
      },
      {
        icon: "/icons/shelter.svg",
        label: "Shelters",
        href: "/list/shelters",
        visible: ["admin", "shelterWorker"],
      },
      {
        icon: "/icons/medicalrecord.svg",
        label: "Medical Records",
        href: "/list/medicalRecords",
        visible: ["admin", "shelterWorker"],
      },
     
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/icons/profile.svg",
        label: "Profile",
        href: "/list/profile",
        visible: ["admin", "shelterWorker"],
      },
      {
        icon: "/icons/settings.svg",
        label: "Settings",
        href: "/list/settings",
        visible: ["admin", "shelterWorker"],
      },
      {
        icon: "/icons/logout.svg",
        label: "Logout",
        onClick: () => signOutAction(),
        visible: ["admin", "shelterWorker"],
      },
    ],
  },
];

const Menu = async () => {
  const role = "admin"
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
         
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return item.href ? (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-white py-2 md:px-2 rounded-md hover:bg-skylight"
                >
                  <Image src={item.icon} alt="" width={30} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              ) : (
                <div
                  key={item.label}
                  onClick={item.onClick}
                  className="flex items-center justify-center lg:justify-start gap-4 text-white py-2 md:px-2 rounded-md hover:bg-skylight cursor-pointer"
                >
                  <Image src={item.icon} alt="" width={30} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
