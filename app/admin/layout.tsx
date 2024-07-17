import AdminNavbar from "@/components/AdminNavbar";
import MarginWidthWrapper from "@/components/MarginWidthWrapper";
import SideNavbar from "@/components/SideNavbar";

export const dynamic = "force-dynamic";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <SideNavbar />
      <main className="flex-col min-h-screen">
        <MarginWidthWrapper>
          <AdminNavbar />
          <div className="flex-1 w-full">{children}</div>
        </MarginWidthWrapper>
      </main>
    </div>
  );
}
