import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AnalyticsShowcase } from "@/components/analytics-showcase";
import { HowItWorks } from "@/components/how-it-works";
import { CtaNetwork } from "@/components/cta-network";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <AnalyticsShowcase />
        <HowItWorks />
        <CtaNetwork />
      </main>
      <SiteFooter />
    </>
  );
}
