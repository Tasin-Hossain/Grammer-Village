import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { WhyUs } from "@/components/WhyUs";
import { SkillTest } from "@/components/SkillTest";
import { KidsLand } from "@/components/KidsLand";
import { Notices } from "@/components/Notices";
import { Videos } from "@/components/Videos";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <WhyUs />
      <SkillTest />
      <KidsLand />
      <Notices />
      <Videos />
      <About />
      <Contact />
    </main>
  );
}
