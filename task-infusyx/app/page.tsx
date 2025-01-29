import dynamic from "next/dynamic";
import Skeleton from "@/components/SkeletonLoader";

const BlogSlider = dynamic(
  () => import("@/components/BlogComponent/BlogSwiper"),
  {
    loading: () => <Skeleton />,
  }
);
const CounterSection = dynamic(
  () => import("@/components/FeatureComponent/Counter"),
  {
    loading: () => <Skeleton />,
  }
);
const Feature = dynamic(() => import("@/components/FeatureComponent/Feature"), {
  loading: () => <Skeleton />,
});
const ServicesGrid = dynamic(
  () => import("@/components/FeatureComponent/Service"),
  {
    loading: () => <Skeleton />,
  }
);
const UzbekistanMediSection = dynamic(
  () => import("@/components/FeatureComponent/UzbekistanMediSection"),
  {
    loading: () => <Skeleton />,
  }
);
const FeesMainComponent = dynamic(
  () => import("@/components/FeeComponents/FeesMainComponent"),
  {
    loading: () => <Skeleton />,
  }
);
const Footer = dynamic(() => import("@/components/HeaderComponent/Footer"), {
  loading: () => <Skeleton />,
});
const HeaderMain = dynamic(
  () => import("@/components/HeaderComponent/HeaderMain"),
  {
    loading: () => <Skeleton />,
  }
);
const FAQComponent = dynamic(() => import("@/components/OtherComponents/FAQ"), {
  loading: () => <Skeleton />,
});
const PhotoGallery = dynamic(
  () => import("@/components/OtherComponents/Gallary"),
  {
    loading: () => <Skeleton />,
  }
);
const MBBSGuidanceForm = dynamic(
  () => import("@/components/OtherComponents/MBBSGuidanceForm"),
  {
    loading: () => <Skeleton />,
  }
);
const PartnerUniversities = dynamic(
  () => import("@/components/PartnerUniversities/PartnerUniversities"),
  {
    loading: () => <Skeleton />,
  }
);
const Testimonials = dynamic(
  () => import("@/components/TestimonialComponent/Testimonial"),
  {
    loading: () => <Skeleton />,
  }
);

export default function Home() {
  return (
    <div className="h-full mx-auto w-full">
      <HeaderMain />
      <Feature />
      <FeesMainComponent />
      <UzbekistanMediSection />
      <CounterSection />
      <ServicesGrid />
      <PartnerUniversities />
      <Testimonials />
      <BlogSlider />
      <PhotoGallery />
      <FAQComponent />
      <MBBSGuidanceForm />
      <Footer />
    </div>
  );
}
