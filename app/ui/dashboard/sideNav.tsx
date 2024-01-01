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

function  LinkItem({ item }: { item: any }) {
  const pathname = usePathname();

  return (
   
      <Link 
       key={item.name}
       className={clsx("p-3 mb-1 bg-slate-100 w-full rounded cursor-pointer hover:bg-orange-100 text-center transition-all ease-in-out duration-200", {
         "bg-orange-100": pathname === item.href,
       })}
      
      href={`${item.href}`}
      >
        {item.name}
      </Link>
    
  );
}

export default function Nav() {
  return (
    <div className="flex mt-10 ms-2 rounded-md bg-slate-50">
       <div className="flex flex-col justify-start items-center w-full h-full p-2  mt-4">
        {items.map((item) => (
          <LinkItem item={item} key={item.name} />
        ))}
      </div>
    </div>
     
   
  );
}





