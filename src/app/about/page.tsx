import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { ActionRow, CardGrid, Section, Split } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CardAction, CardLink } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "About | BrightView LLC",
  description: "BrightView LLC is a family-owned Michigan exterior cleaning and holiday lighting business.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="BRIGHTVIEW LLC | ABOUT" title={"Family-Owned.\nMichigan Proud."} description="Exterior cleaning and holiday lighting for Michigan homes, done with care." image="/images/Hero-HomePage.png" objectPosition="center 40%" />
      <Section>
        <Split>
          <div>
            <SectionHeading eyebrow="Who we are" title="A local team that takes pride in the details." lead="BrightView LLC is a family-owned Michigan business. We clean windows, pressure wash outdoor surfaces and install holiday lighting, so your home looks its best all year long." />
            <ActionRow><Button href="/our-work" arrow>See our work</Button></ActionRow>
          </div>
          <CardGrid single>
            {services.map((s) => (
              <CardLink key={s.slug} href={"/services/" + s.slug}>
                <h3>{s.title}</h3>
                <p>{s.what}</p>
                <CardAction>Learn more →</CardAction>
              </CardLink>
            ))}
          </CardGrid>
        </Split>
      </Section>
      <QuoteBand title="Ready to brighten your home?" text="Tell us what you have in mind and we'll follow up with a quote." />
    </>
  );
}
