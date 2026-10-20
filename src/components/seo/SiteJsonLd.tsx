import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/**
 * Site-wide structured data. Only confirmed public facts are used. Deliberately omitted: street address, postal code,
 * geo coordinates, opening hours, ratings and review markup. The address is limited to state level because
 * BrightView is a service-area business and its base location is private.
 */
export function SiteJsonLd() {
  const url = absoluteUrl("/");
  if (!url) return null;
  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: site.name,
    url,
    logo: absoluteUrl("/brand/brightview-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phone,
    email: site.email,
    description: "Family-owned Michigan exterior cleaning and holiday lighting business.",
    address: { "@type": "PostalAddress", addressRegion: "MI", addressCountry: "US" },
    areaServed: { "@type": "Place", name: "Southeast Michigan" },
    sameAs: [site.facebookUrl],
  };
  const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${url}/#website`, url, name: site.name, publisher: { "@id": `${url}/#business` } };
  return (
    <>
      <JsonLd data={business} />
      <JsonLd data={website} />
    </>
  );
}
