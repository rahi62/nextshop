"use client";
import { usePathname } from "next/navigation";
import Nav from "./nav";

export default function Header() {
  const pathname: string = usePathname();

  return (
    <>
      {pathname === "/dashboard" ? '' : pathname === "/dashboard/users" ? '' : pathname === "/dashboard/products" ? "" : pathname === "/dashboard/customers" ? "" : (
        <header className="flex items-center w-screen h-[80px] ">
          <Nav />
        </header>
      )}
    </>
  );
}
