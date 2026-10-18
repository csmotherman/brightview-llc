import { site } from "@/config/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.ownership} · {site.region}</p>
      </Container>
    </footer>
  );
}
