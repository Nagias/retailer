import CategorySection from "@/components/CategorySection";
import ComboSection from "@/components/ComboSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductGridSection from "@/components/ProductGridSection";
import RetailerSection from "@/components/RetailerSection";
import UseCaseSection from "@/components/UseCaseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <UseCaseSection />
        <ProductGridSection />
        <ComboSection />
        <RetailerSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
