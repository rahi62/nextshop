"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const items = [
  { name: "home", href: "/" },
  { name: "products", href: "/products" },
  { name: "about", href: "/about" },
];

function LinkItem({ item }: { item: any }) {
  const pathname = usePathname();

  return (
    <li
     
    >
      <Link      
       href={`${item.href}`}
       key={item.name}
       className={clsx("px-5 py-2 h-full flex items-center hover:border-b-2 ", {
         "  border-b-2 border-b-orange-500 ": pathname === item.href,
       })}
       >
        {item.name}
       </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <div className="hidden md:block">
      <ul className="flex justify-between items-center h-[80px] ">
        {items.map((item) => (
          <LinkItem item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}
