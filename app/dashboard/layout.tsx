import SideNav from "../ui/dashboard/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <SideNav />
      {children}
    </div>
  );
}
