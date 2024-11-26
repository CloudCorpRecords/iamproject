import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import TradingBot from "@/components/TradingBot";
import TokenUtility from "@/components/TokenUtility";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 space-y-24 py-16">
        <Agents />
        <TradingBot />
        <TokenUtility />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
