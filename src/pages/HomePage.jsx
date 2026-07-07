import { HeroSection } from '@/components/home/HeroSection';
import { TrustedSection } from '@/components/home/TrustedSection';
import { ScreenshotsSection } from '@/components/home/ScreenshotsSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { CtaSection } from '@/components/home/CtaSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <ScreenshotsSection />
      <WhyChooseSection />
      <CtaSection />
    </>
  );
}
