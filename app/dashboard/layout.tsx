import SideNav from "@/app//ui/dashboard/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <SideNav />
      <div className=" min-h-screen p-5 mt-5 flex-1 w-64">
        <div className="bg-slate-100 w-full h-full rounded-md p-4" >{children}</div>
      </div>
    </div>
  );
}
