import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { ActionRow, Section, Split } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonStack, PhotoGrid } from "@/components/services/Gallery";
import { services } from "@/content/services";
import styles from "./ServiceDetail.module.css";

const heroes: Record<string, { image: string; pos: string; title: string }> = {
  "window-cleaning": { image: "/images/Hero-HomePage.png", pos: "center 45%", title: "Clearer Windows.\nBrighter Views." },
  "pressure-washing": { image: "/images/projects/pressure-washing/Porch.png", pos: "center 55%", title: "Curb Appeal\nRestored." },
  "holiday-lights": { image: "/images/projects/holiday-lights/HolidayHero.png", pos: "center 40%", title: "Holiday Lights\nDone Right." },
};

export function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug)!;
  const hero = heroes[slug];
  return (
    <>
      <PageHeader eyebrow={"BRIGHTVIEW LLC | " + service.title.toUpperCase()} title={hero.title} description={service.what} image={hero.image} objectPosition={hero.pos} />
      <Section>
        <Split>
          <div>
            <SectionHeading eyebrow="Why it helps" title={service.title} lead={service.benefit} />
            <ActionRow><Button href="/services" arrow>All services</Button></ActionRow>
          </div>
          <ComparisonStack comparisons={service.comparisons} />
        </Split>
        {service.finished.length > 0 && (
          <div className={styles.photos}>
            <SectionHeading title="Project photos" />
            <div className={styles.photoGrid}><PhotoGrid photos={service.finished} /></div>
          </div>
        )}
      </Section>
      <QuoteBand title={"Interested in " + service.title.toLowerCase() + "?"} text="Tell us about your project and we'll follow up with a quote." />
    </>
  );
}
