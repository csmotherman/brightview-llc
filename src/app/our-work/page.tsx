import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { Section } from "@/components/layout/Section";
import { WorkGallery } from "@/components/services/WorkGallery";

export const metadata: Metadata = {
  title: "Our Work | BrightView LLC",
  description: "Real before-and-after photos and holiday lighting projects from BrightView LLC.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader eyebrow="BRIGHTVIEW LLC | OUR WORK" title={"Real Projects.\nReal Results."} description="Every photo here is from a real BrightView job." image="/images/projects/holiday-lights/HolidayHero.png" objectPosition="center 40%" />
      <Section>
        <WorkGallery />
      </Section>
      <QuoteBand title="Want results like these?" text="Tell us about your home and we'll put together a quote." />
    </>
  );
}
