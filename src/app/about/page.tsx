import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { aboutCta, aboutHero, aboutPrinciples, aboutStory, aboutTrust, aboutWork, aboutYearRound } from "@/content/about";
import { reviews } from "@/content/reviews";
import { serviceDetails } from "@/content/service-details";
import { site } from "@/config/site";
import { RevealOnScroll } from "./RevealOnScroll";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About BrightView | Family-Owned Michigan Exterior Cleaning & Holiday Lighting",
  description:
    "Meet BrightView LLC, a family-owned Michigan business for window cleaning, exterior washing, gutter and roof cleaning, and professionally installed holiday lighting. See our real projects and what customers say.",
};

const featured = reviews.find((r) => r.name === "Dawn Bostwick")!;
const others = reviews.filter((r) => r.name !== featured.name);
const serviceById = new Map(serviceDetails.map((s) => [s.id, s]));

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <RevealOnScroll />

      {/* 1. Hero */}
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>{aboutHero.eyebrow}</p>
          <h1 id="about-hero-title">{aboutHero.headline}</h1>
          <p className={styles.lede}>{aboutHero.intro}</p>
          <div className={styles.heroActions}>
            <Button href="/quote" variant="gold" arrow>Get a Free Quote</Button>
            <Button href="/services" variant="outline" className={styles.ghost}>See Our Services</Button>
          </div>
        </div>
        <figure className={styles.heroMedia}>
          <Image src={aboutHero.image.src} alt={aboutHero.image.alt} fill priority sizes="(max-width: 900px) 100vw, 52vw" className={styles.cover} style={{ objectPosition: "42% 40%" }} />
          <figcaption className={styles.chip}>
            <Image src="/brand/brightview-logo.png" alt="" width={44} height={44} className={styles.chipLogo} />
            <span><strong>Family-owned</strong><small>Michigan exterior care</small></span>
          </figcaption>
        </figure>
      </section>

      {/* 2. Story */}
      <section className={`${styles.glass} ${styles.story} ${styles.reveal}`} aria-labelledby="about-story-title" data-reveal>
        <div className={styles.storyText}>
          <p className={styles.kicker}>OUR STORY</p>
          <h2 id="about-story-title">{aboutStory.heading}</h2>
          {aboutStory.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <figure className={styles.storyMedia}>
          <Image src={aboutStory.image.src} alt={aboutStory.image.alt} fill sizes="(max-width: 900px) 100vw, 44vw" className={styles.cover} style={{ objectPosition: "50% 45%" }} />
          <blockquote className={styles.frost}>
            <p>{aboutStory.pullQuote}</p>
            <footer>{aboutStory.caption}</footer>
          </blockquote>
        </figure>
      </section>

      {/* 3. Principles */}
      <section className={`${styles.glass} ${styles.principles} ${styles.reveal}`} aria-labelledby="about-principles-title" data-reveal>
        <h2 id="about-principles-title">{aboutPrinciples.heading}</h2>
        <ol className={styles.principleList}>
          {aboutPrinciples.items.map((item, i) => (
            <li key={item.title}>
              <span className={styles.index} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. The work */}
      <section className={`${styles.work} ${styles.reveal}`} aria-labelledby="about-work-title" data-reveal>
        <header className={styles.workHead}>
          <h2 id="about-work-title">{aboutWork.heading}</h2>
          <Link href="/services" className={styles.textLink}>See the services behind the work <span aria-hidden="true">→</span></Link>
        </header>
        <div className={styles.workGrid}>
          {aboutWork.items.map((item, i) => (
            <figure key={item.service} className={i === 0 ? styles.workLead : styles.workTile}>
              <Image src={item.src} alt={item.alt} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 900px) 100vw, 38vw"} className={styles.cover} style={{ objectPosition: item.position }} />
              <figcaption className={styles.workCaption}>
                <small>{item.service}</small>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. Trust */}
      <section className={`${styles.glass} ${styles.trust} ${styles.reveal}`} aria-labelledby="about-trust-title" data-reveal>
        <h2 id="about-trust-title">{aboutTrust.heading}</h2>
        <figure className={styles.featured}>
          <blockquote><p>{featured.quote}</p></blockquote>
          <figcaption><strong>{featured.name}</strong> <span>Facebook recommendation · {featured.date}</span></figcaption>
        </figure>
        <div className={styles.moreQuotes}>
          {others.map((r) => (
            <figure key={r.name} className={styles.quote}>
              <blockquote><p>{r.quote}</p></blockquote>
              <figcaption><strong>{r.name}</strong> <span>Facebook recommendation{r.date ? ` · ${r.date}` : ""}</span></figcaption>
            </figure>
          ))}
        </div>
        <a className={styles.textLinkDark} href={site.facebookUrl} target="_blank" rel="noopener noreferrer">Find us on Facebook <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </section>

      {/* 6. Year-round */}
      <section className={`${styles.glass} ${styles.seasons} ${styles.reveal}`} aria-labelledby="about-seasons-title" data-reveal>
        <div className={styles.seasonsIntro}>
          <h2 id="about-seasons-title">{aboutYearRound.heading}</h2>
          <p>{aboutYearRound.intro}</p>
          <Button href="/services" arrow>Explore Our Services</Button>
        </div>
        <div className={styles.groups}>
          {aboutYearRound.groups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3>{group.title}</h3>
              <ul>
                {group.ids.map((id) => {
                  const s = serviceById.get(id)!;
                  return (
                    <li key={id}>
                      <Link href={`/services#${id}`}>
                        <Image src={s.symbol} alt="" width={40} height={40} sizes="40px" className={styles.symbol} />
                        <span>{s.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {"note" in group && <p className={styles.groupNote}>{group.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className={`${styles.glass} ${styles.cta} ${styles.reveal}`} aria-labelledby="about-cta-title" data-reveal>
        <p className={styles.kicker}>{aboutCta.eyebrow}</p>
        <h2 id="about-cta-title">{aboutCta.headline}</h2>
        <p>{aboutCta.copy}</p>
        <div className={styles.ctaActions}>
          <Button href="/quote" arrow>Request Your Free Quote</Button>
          <Button href={site.facebookUrl} variant="outline" target="_blank" rel="noopener noreferrer">Visit Us on Facebook<span className="sr-only"> (opens in a new tab)</span></Button>
        </div>
      </section>
    </div>
  );
}
