import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import TradingBot from "@/components/TradingBot";
import TokenUtility from "@/components/TokenUtility";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import IframeChatbox from "@/components/IframeChatbox";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRain />
      <Hero />
      <main className="container mx-auto px-4 space-y-24 py-16">
        <Agents />
        <TradingBot />
        <TokenUtility />
        <Newsletter />
      </main>
      <Footer />
      <IframeChatbox />
    </div>
  );
}
