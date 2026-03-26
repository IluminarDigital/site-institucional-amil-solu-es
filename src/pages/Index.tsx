import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialsBar from "@/components/CredentialsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SegmentsCarousel from "@/components/SegmentsCarousel";
import DifferentialsSection from "@/components/DifferentialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CredentialsBar />
      <AboutSection />
      <ServicesSection />
      <SegmentsCarousel />
      <CTASection />
      <CertificationsSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
