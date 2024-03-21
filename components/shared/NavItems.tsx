//NavBar的主要內容

"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
      {/* 利用Map陣列渲染出連結的物件 <- constants/index.ts */}
      {headerLinks.map((link) => {
        const isActive = pathname === link.route; //核對現時Path與navbar內的連結地址。

        return (
          //如果連結地址相同，文字的顏色會顯示為藍色。
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
