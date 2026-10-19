import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Service Areas | BrightView LLC",
  description: "BrightView LLC serves homeowners in Michigan. Message us to confirm your area.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader eyebrow="BRIGHTVIEW LLC | SERVICE AREA" title={"Serving\nMichigan Homes."} description="Window cleaning, pressure washing and holiday lighting across Michigan." image="/images/projects/holiday-lights/House1.png" objectPosition="center 35%" />
      <Section>
        <SectionHeading eyebrow="Where we work" title="Not sure if we cover your town?" lead="BrightView is based in Michigan. Send us a message with your town and we'll let you know right away whether we can help." />
      </Section>
      <QuoteBand title="Check your area." text="Send us your address and the services you need and we'll confirm we serve your area." />
    </>
  );
}
