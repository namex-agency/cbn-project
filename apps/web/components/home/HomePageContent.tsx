import Hero from "@/components/home/Hero";
import SignatureStatement from "@/components/home/SignatureStatement";
import CollectionsShowcase from "@/components/home/CollectionsShowcase";
import CollectionsShowcaseSecondary from "@/components/home/CollectionsShowcaseSecondary";
import MillesimeShowcase from "@/components/home/MillesimeShowcase";
import VideoShowcase from "@/components/home/VideoShowcase";
import BrandStoryShowcase from "@/components/home/BrandStoryShowcase";
import OriginShowcase from "@/components/home/OriginShowcase";
import GalleryDualShowcase from "@/components/home/GalleryDualShowcase";
import SocialLinksShowcase from "@/components/home/SocialLinksShowcase";
import StoreLocatorShowcase from "@/components/home/StoreLocatorShowcase";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureStatement />
      <CollectionsShowcase />
      <CollectionsShowcaseSecondary />
      <MillesimeShowcase />
      <VideoShowcase />
      <BrandStoryShowcase />
      <OriginShowcase />
      <GalleryDualShowcase />
      <SocialLinksShowcase />
      <StoreLocatorShowcase />
      <Footer />
    </>
  );
}