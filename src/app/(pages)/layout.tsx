
import SideNave from "@/components/SideNave";
import '../../css/style.scss'
import '../../css/home.scss'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container main-web-wrapper">
      <div className="side-nav-bar">
      <SideNave/>
      </div>
      <div className="content-right-frame">{children}</div>
    </main>
  );
}
