import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteBand } from "@/components/layout/QuoteBand";
import { ComparisonGallery, ComparisonStack, PhotoTile, ProjectLabel } from "@/components/services/Gallery";
import { gutterProject, services } from "@/content/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | BrightView LLC",
  description:
    "Explore BrightView's window cleaning, pressure washing and holiday lighting services, with actual project photographs from Michigan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="BRIGHTVIEW LLC | OUR SERVICES"
        title={"Services &\nProject Photos"}
        description="What we do, why it helps, and real examples of our work from Michigan homes."
        image="/images/projects/window-cleaning/Full House 16-9.png"
        objectPosition="center 40%"
      >
        <nav className={styles.quickLinks} aria-label="Services on this page">
          {services.map((service) => (
            <a href={"#" + service.slug} key={service.slug}>{service.title} <span aria-hidden="true">↓</span></a>
          ))}
        </nav>
      </PageHeader>

      <PageContainer>
        {services.map((service) => {
          const split = service.comparisons.length > 0 && service.finished.length > 0;
          return (
            <section key={service.slug} id={service.slug} className={styles.service} aria-labelledby={service.slug + "-title"}>
              <div className={styles.serviceDetails}>
                <h2 id={service.slug + "-title"}>{service.title}</h2>
                <div className={styles.descriptionGroup}>
                  <div><h3>What we do</h3><p>{service.what}</p></div>
                  <div><h3>Why it helps</h3><p>{service.benefit}</p></div>
                </div>
              </div>
              <div className={split ? styles.gallerySplit : undefined}>
                {service.comparisons.length > 0 && <ComparisonStack comparisons={service.comparisons} />}
                {service.finished.length > 0 && (
                  <div className={styles.finished}>
                    <ProjectLabel>{service.comparisons.length > 0 ? "More project photos" : "Completed projects"}</ProjectLabel>
                    <div className={styles.finishedPhotos}>
                      {service.finished.map((photo) => <PhotoTile key={photo.src} photo={photo} />)}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <section className={styles.extraWork} aria-labelledby="extra-title">
          <div className={styles.extraHeading}>
            <h2 id="extra-title">Additional project photos</h2>
            <p>Gutter cleaning</p>
          </div>
          <div><ComparisonGallery comparison={gutterProject} /></div>
        </section>
      </PageContainer>

      <QuoteBand title="Interested in a service?" text="Tell us what you need, and we'll follow up to discuss your quote." />
    </>
  );
}
