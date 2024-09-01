
import SideNave from "@/components/SideNave";
import '../../css/style.scss'
import '../../css/home.scss'
import Image from "next/image";
import logo from '../../assets/images/blue_logo.jpg'
import { TextAlignRight } from "@phosphor-icons/react/dist/ssr";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container main-web-wrapper">
      <input type="checkbox" className="menue-chek hidden" id="so" />
      <header className="mb-header">
       <Image src={logo} className="logo" alt=''/>
       <label htmlFor="so">
       <TextAlignRight size={32} className="menue" />
       </label>
      </header>
      <div className="side-nav-bar">
      <SideNave/>
      </div>
      <div className="content-right-frame">{children}</div>
    </main>
  );
}
