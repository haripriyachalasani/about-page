
import NavBar from "@/app/_components/navbar";
import {SpotlightPreview} from "@/app/_components/spotlightview";
import {SparklesPreview} from "@/app/_components/sparklesview";
import {StickyScrollRevealDemo} from "@/app/_components/stickyscroll";
import MetricsCard from "@/app/_components/metricscard";
import {TimelineDemo} from "@/app/_components/timeline";
import { CardHoverEffectDemo } from "@/app/_components/cardhovereffect";
import {HeroVideoDialogDemo} from "@/app/_components/herovideodialog"
import {AnimatedPinDemo} from "@/app/_components/threedpin"
import Footer from "@/app/_components/footer";



export default function Home() {
  return (
    <div>
      <NavBar />
      <SpotlightPreview />
      <SparklesPreview />
      <StickyScrollRevealDemo />
      <MetricsCard />
      <TimelineDemo />
      <CardHoverEffectDemo />
      <HeroVideoDialogDemo />
      <AnimatedPinDemo />
      <Footer />
      
    </div>
  );
}
