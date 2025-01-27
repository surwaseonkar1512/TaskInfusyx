import Feature from "@/components/FeatureComponent/Feature";
import FeesMainComponent from "@/components/FeeComponents/FeesMainComponent";
import HeaderMain from "@/components/HeaderComponent/HeaderMain";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full mx-auto  w-full">
      <HeaderMain />
      <Feature />
      <FeesMainComponent />
    </div>
  );
}
