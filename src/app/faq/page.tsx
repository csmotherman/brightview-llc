import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { Section } from "@/components/layout/Section";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ | BrightView LLC",
  description: "Answers to common questions about BrightView's services and how to request a quote.",
};

const faqs = [
  ["What services do you offer?", "We offer window cleaning, pressure washing and holiday lighting for Michigan homes. We've also completed gutter cleaning projects."],
  ["How do I request a quote?", "Use our quote form to choose one or more services and share a few details about your home. We'll follow up with a quote."],
  ["Do you serve my area?", "BrightView is based in Michigan. Send us your town and we'll confirm whether we can help."],
  ["Can I see examples of your work?", "Yes. Browse real before-and-after photos and holiday lighting projects on our Our Work and Services pages."],
] as const;

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="BRIGHTVIEW LLC | FAQ" title={"Questions?\nWe Have Answers."} description="The basics about working with BrightView." image="/images/projects/holiday-lights/Trees.png" objectPosition="center 40%" />
      <Section>
        <div className={styles.faq}>
          {faqs.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </Section>
      <QuoteBand title="Still have a question?" text="Send us a message and we'll be happy to help." />
    </>
  );
}
