import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "./Container";

/* Navigation deliberately waits until real routes exist. */
export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="BrightView LLC home">
          <Image
            src="/brand/brightview-logo.png"
            width={64}
            height={64}
            priority
            alt=""
            className="site-brand__logo"
          />
          <span className="site-brand__wordmark">{site.name}</span>
        </Link>
        <span className="site-header__note">{site.ownership} in {site.region}</span>
      </Container>
    </header>
  );
}
