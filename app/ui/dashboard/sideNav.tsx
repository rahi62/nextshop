"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const items = [
  { name: "dashboard", href: "/dashboard" ,id:0},
  { name: "products", href: "/dashboard/products", id:1 },
  { name: "users", href: "/dashboard/users", id:2 },
  { name: "customers", href: "/dashboard/customers", id:3 },
];

function LinkItem({ item }: { item: any }) {
  const pathname = usePathname();

  return (
   
      <Link 
       key={item.name}
       className={clsx("p-3 mb-1 bg-slate-300 w-full rounded-lg cursor-pointer hover:bg-slate-100 text-center transition-all ease-in-out duration-200", {
         "bg-transparent hover:bg-transparent top-[80px] right-[35vw] w-[20vw] absolute ": pathname === item.href,
       })}
      
      href={`${item.href}`}
      >
        {item.name}
      </Link>
    
  );
}

export default function Nav() {
  return (
    <div className="flex flex-col justify-start items-center bg-slate-200 w-[200px] h-screen">
      <div className="flex flex-col justify-start items-center w-full h-[70%] p-2">
        {items.map((item) => (
          <LinkItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}














